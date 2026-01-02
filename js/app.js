/**
 * Winget Command Generator - Main Application
 */

(function() {
    'use strict';

    // State
    const state = {
        selectedApps: new Set(),
        appDataFlat: {}
    };

    // DOM Elements
    const $ = id => document.getElementById(id);
    
    const elements = {
        appsSection: $('appsSection'),
        loadingState: $('loadingState'),
        searchInput: $('searchInput'),
        selectAllBtn: $('selectAllBtn'),
        clearAllBtn: $('clearAllBtn'),
        outputContent: $('outputContent'),
        outputFormat: $('outputFormat'),
        silentInstall: $('silentInstall'),
        acceptAgreements: $('acceptAgreements'),
        copyAllBtn: $('copyAllBtn'),
        selectedCount: $('selectedCount'),
        toast: $('toast'),
        toastMessage: $('toastMessage')
    };

    // Register service worker for icon caching
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    }

    // Initialize
    function init() {
        Object.values(AppData).forEach(category => {
            category.apps.forEach(app => {
                state.appDataFlat[app.id] = app;
            });
        });

        renderApps();
        bindEvents();
        
        if (elements.loadingState) {
            elements.loadingState.style.display = 'none';
        }
    }

    // Events
    function bindEvents() {
        elements.searchInput.addEventListener('input', onSearch);
        elements.selectAllBtn.addEventListener('click', selectAll);
        elements.clearAllBtn.addEventListener('click', clearAll);
        elements.outputFormat.addEventListener('change', refreshOutput);
        elements.silentInstall.addEventListener('change', refreshOutput);
        elements.acceptAgreements.addEventListener('change', refreshOutput);
        elements.copyAllBtn.addEventListener('click', copyToClipboard);
    }

    // Render
    function renderApps() {
        let html = '';

        Object.entries(AppData).forEach(([categoryName, category]) => {
            const appsHtml = category.apps.map(app => {
                const iconUrl = getIconUrl(app.id);
                
                return `
                    <div class="app-item" data-id="${app.id}" data-name="${app.name.toLowerCase()}" onclick="WingetApp.toggleApp('${app.id}')">
                        <div class="app-checkbox"><i class="fas fa-check"></i></div>
                        <div class="app-icon">
                            <img src="${iconUrl}" alt="${app.name}" loading="lazy" onerror="handleImageError(this)">
                        </div>
                        <span class="app-name">${app.name}</span>
                    </div>
                `;
            }).join('');

            html += `
                <div class="category" data-category="${categoryName}">
                    <div class="category-header">
                        <div class="category-icon ${category.colorClass}">
                            <i class="fas ${category.icon}"></i>
                        </div>
                        <span class="category-name">${categoryName}</span>
                        <div class="category-actions">
                            <button class="category-select-btn" onclick="WingetApp.selectCategory('${categoryName}')">all</button>
                        </div>
                    </div>
                    <div class="apps-list">${appsHtml}</div>
                </div>
            `;
        });

        elements.appsSection.innerHTML = html;
        updateCount();
    }

    // Selection
    function toggleApp(appId) {
        const item = document.querySelector(`[data-id="${appId}"]`);
        
        if (state.selectedApps.has(appId)) {
            state.selectedApps.delete(appId);
            item?.classList.remove('selected');
        } else {
            state.selectedApps.add(appId);
            item?.classList.add('selected');
        }
        
        updateCount();
        refreshOutput();
    }

    function selectCategory(categoryName) {
        const category = AppData[categoryName];
        if (!category) return;

        const allSelected = category.apps.every(app => state.selectedApps.has(app.id));

        category.apps.forEach(app => {
            const item = document.querySelector(`[data-id="${app.id}"]`);
            
            if (allSelected) {
                state.selectedApps.delete(app.id);
                item?.classList.remove('selected');
            } else {
                state.selectedApps.add(app.id);
                item?.classList.add('selected');
            }
        });

        updateCount();
        refreshOutput();
    }

    function selectAll() {
        document.querySelectorAll('.app-item:not(.hidden)').forEach(item => {
            state.selectedApps.add(item.dataset.id);
            item.classList.add('selected');
        });
        updateCount();
        refreshOutput();
    }

    function clearAll() {
        state.selectedApps.clear();
        document.querySelectorAll('.app-item.selected').forEach(item => {
            item.classList.remove('selected');
        });
        updateCount();
        refreshOutput();
    }

    // Search
    function onSearch(e) {
        const query = e.target.value.toLowerCase().trim();

        document.querySelectorAll('.app-item').forEach(item => {
            const name = item.dataset.name || '';
            const id = (item.dataset.id || '').toLowerCase();
            const match = !query || name.includes(query) || id.includes(query);
            item.classList.toggle('hidden', !match);
        });

        document.querySelectorAll('.category').forEach(cat => {
            const hasVisible = cat.querySelectorAll('.app-item:not(.hidden)').length > 0;
            cat.style.display = hasVisible ? '' : 'none';
        });
    }

    // UI
    function updateCount() {
        const count = state.selectedApps.size;
        elements.selectedCount.textContent = count;
        elements.copyAllBtn.disabled = count === 0;
    }

    // Commands
    function refreshOutput() {
        const count = state.selectedApps.size;

        if (count === 0) {
            elements.outputContent.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-hand-pointer"></i>
                    <p>Select apps to generate command</p>
                </div>
            `;
            return;
        }

        const apps = Array.from(state.selectedApps);
        const multiLine = elements.outputFormat.checked;
        const command = generateCommand(apps, multiLine);

        elements.outputContent.innerHTML = `<div class="command-block">${command}</div>`;
    }

    function generateCommand(apps, multiLine) {
        const flags = [];
        
        if (elements.silentInstall.checked) {
            flags.push('--silent');
        }
        
        if (elements.acceptAgreements.checked) {
            flags.push('--accept-package-agreements');
            flags.push('--accept-source-agreements');
        }

        const flagsHtml = flags.map(f => `<span class="flag">${f}</span>`).join(' ');

        if (multiLine) {
            return apps.map(id => {
                let cmd = `<span class="keyword">winget</span> <span class="command">install</span> <span class="flag">--id</span> <span class="package">${id}</span>`;
                if (flagsHtml) cmd += ' ' + flagsHtml;
                return cmd;
            }).join('\n');
        } else {
            const packages = apps.map(id => `<span class="package">${id}</span>`).join(' ');
            let cmd = `<span class="keyword">winget</span> <span class="command">install</span> <span class="flag">--id</span> ${packages}`;
            if (flagsHtml) cmd += ' ' + flagsHtml;
            return cmd;
        }
    }

    // Clipboard
    function copyToClipboard() {
        const block = document.querySelector('.command-block');
        if (!block) return;

        navigator.clipboard.writeText(block.textContent).then(() => {
            showToast('Copied to clipboard!');
            
            const btn = elements.copyAllBtn;
            const originalHtml = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            btn.style.background = 'var(--success)';
            
            setTimeout(() => {
                btn.innerHTML = originalHtml;
                btn.style.background = '';
            }, 1500);
        });
    }

    // Toast
    function showToast(message) {
        elements.toastMessage.textContent = message;
        elements.toast.classList.add('show');
        setTimeout(() => elements.toast.classList.remove('show'), 2500);
    }

    // Public API
    window.WingetApp = { toggleApp, selectCategory };

    // Start
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();