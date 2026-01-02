/**
 * Application Data
 * Apps organized by category - ordered by popularity
 */

const AppData = {
    "Web Browsers": {
        icon: "fa-globe",
        colorClass: "cat-browsers",
        apps: [
            { name: "Chrome", id: "Google.Chrome" },
            { name: "Edge", id: "Microsoft.Edge" },
            { name: "Firefox", id: "Mozilla.Firefox" },
            { name: "Brave", id: "Brave.Brave" },
            { name: "Opera", id: "Opera.Opera" },
            { name: "Opera GX", id: "Opera.OperaGX" },
            { name: "Vivaldi", id: "Vivaldi.Vivaldi" },
            { name: "Tor Browser", id: "TorProject.TorBrowser" }
        ]
    },

    "Messaging": {
        icon: "fa-comments",
        colorClass: "cat-messaging",
        apps: [
            { name: "WhatsApp", id: "9NKSQGP7F2NH" },
            { name: "Discord", id: "Discord.Discord" },
            { name: "Telegram", id: "Telegram.TelegramDesktop" },
            { name: "Zoom", id: "Zoom.Zoom" },
            { name: "Teams", id: "Microsoft.Teams" },
            { name: "Slack", id: "SlackTechnologies.Slack" },
            { name: "Signal", id: "OpenWhisperSystems.Signal" },
            { name: "Thunderbird", id: "Mozilla.Thunderbird" }
        ]
    },

    "Media": {
        icon: "fa-play-circle",
        colorClass: "cat-media",
        apps: [
            { name: "Spotify", id: "Spotify.Spotify" },
            { name: "VLC", id: "VideoLAN.VLC" },
            { name: "iTunes", id: "Apple.iTunes" },
            { name: "Plex", id: "Plex.Plex" },
            { name: "OBS Studio", id: "OBSProject.OBSStudio" },
            { name: "Audacity", id: "Audacity.Audacity" },
            { name: "HandBrake", id: "HandBrake.HandBrake" },
            { name: "MusicBee", id: "9P4CLT2RJ1RS" },
            { name: "foobar2000", id: "PeterPawlowski.foobar2000" },
            { name: "AIMP", id: "AIMP.AIMP" }
        ]
    },

    "Imaging": {
        icon: "fa-image",
        colorClass: "cat-imaging",
        apps: [
            { name: "Figma", id: "Figma.Figma" },
            { name: "Blender", id: "BlenderFoundation.Blender" },
            { name: "GIMP", id: "GIMP.GIMP.3" },
            { name: "Paint.NET", id: "dotPDN.PaintDotNet" },
            { name: "ShareX", id: "ShareX.ShareX" },
            { name: "Inkscape", id: "Inkscape.Inkscape" },
            { name: "Krita", id: "KDE.Krita" },
            { name: "Affinity", id: "Canva.Affinity" }
        ]
    },

    "Documents": {
        icon: "fa-file-alt",
        colorClass: "cat-documents",
        apps: [
            { name: "Notion", id: "Notion.Notion" },
            { name: "Obsidian", id: "Obsidian.Obsidian" },
            { name: "LibreOffice", id: "TheDocumentFoundation.LibreOffice" },
            { name: "Calibre", id: "calibre.calibre" },
            { name: "OpenOffice", id: "Apache.OpenOffice" }
        ]
    },

    "Security": {
        icon: "fa-shield-alt",
        colorClass: "cat-security",
        apps: [
            { name: "Malwarebytes", id: "Malwarebytes.Malwarebytes" },
            { name: "Bitwarden", id: "Bitwarden.Bitwarden" },
            { name: "NordVPN", id: "NordVPN.NordVPN" },
            { name: "ProtonVPN", id: "ProtonTechnologies.ProtonVPN" },
            { name: "KeePassXC", id: "KeePassXCTeam.KeePassXC" },
            { name: "KeePass", id: "DominikReichl.KeePass" },
            { name: "AdwCleaner", id: "Malwarebytes.AdwCleaner" }
        ]
    },

    "Cloud Storage": {
        icon: "fa-cloud",
        colorClass: "cat-storage",
        apps: [
            { name: "Google Drive", id: "Google.GoogleDrive" },
            { name: "OneDrive", id: "Microsoft.OneDrive" },
            { name: "Dropbox", id: "Dropbox.Dropbox" },
            { name: "Nextcloud", id: "Nextcloud.NextcloudDesktop" },
            { name: "pCloud", id: "pCloudAG.pCloudDrive" }
        ]
    },

    "File Sharing": {
        icon: "fa-share-alt",
        colorClass: "cat-filesharing",
        apps: [
            { name: "qBittorrent", id: "qBittorrent.qBittorrent" },
            { name: "Deluge", id: "DelugeTeam.Deluge" },
            { name: "Transmission", id: "Transmission.Transmission" }
        ]
    },

    "Compression": {
        icon: "fa-file-archive",
        colorClass: "cat-compression",
        apps: [
            { name: "WinRAR", id: "RARLab.WinRAR" },
            { name: "7-Zip", id: "7zip.7zip" },
            { name: "PeaZip", id: "Giorgiotani.Peazip" }
        ]
    },

    "Utilities": {
        icon: "fa-tools",
        colorClass: "cat-utilities",
        apps: [
            { name: "PowerToys", id: "Microsoft.PowerToys" },
            { name: "CPU-Z", id: "CPUID.CPU-Z" },
            { name: "HWiNFO", id: "REALiX.HWiNFO" },
            { name: "WizTree", id: "AntibodySoftware.WizTree" },
            { name: "WinDirStat", id: "WinDirStat.WinDirStat" },
            { name: "Revo Uninstaller", id: "RevoUninstaller.RevoUninstaller" },
            { name: "Bulk Crap Uninstaller", id: "Klocman.BulkCrapUninstaller" },
            { name: "Sysinternals Suite", id: "Microsoft.Sysinternals.Suite" }
        ]
    },

    "Remote Access": {
        icon: "fa-desktop",
        colorClass: "cat-utilities",
        apps: [
            { name: "TeamViewer", id: "TeamViewer.TeamViewer" },
            { name: "AnyDesk", id: "AnyDesk.AnyDesk" },
            { name: "Parsec", id: "Parsec.Parsec" },
            { name: "RustDesk", id: "RustDesk.RustDesk" }
        ]
    },

    "Gaming": {
        icon: "fa-gamepad",
        colorClass: "cat-other",
        apps: [
            { name: "Steam", id: "Valve.Steam" },
            { name: "Epic Games", id: "EpicGames.EpicGamesLauncher" },
            { name: "EA App", id: "ElectronicArts.EADesktop" },
            { name: "Battle.net", id: "Blizzard.BattleNet" },
            { name: "Ubisoft Connect", id: "Ubisoft.Connect" },
            { name: "GOG Galaxy", id: "GOG.Galaxy" },
            { name: "Playnite", id: "Playnite.Playnite" }
        ]
    },

    "Developer Tools": {
        icon: "fa-code",
        colorClass: "cat-devtools",
        apps: [
            { name: "VS Code", id: "Microsoft.VisualStudioCode" },
            { name: "Git", id: "Git.Git" },
            { name: "Visual Studio 2022", id: "Microsoft.VisualStudio.2022.Community" },
            { name: "Docker Desktop", id: "Docker.DockerDesktop" },
            { name: "Node.js LTS", id: "OpenJS.NodeJS.LTS" },
            { name: "Python 3.12", id: "Python.Python.3.12" },
            { name: "GitHub Desktop", id: "GitHub.GitHubDesktop" },
            { name: "Notepad++", id: "Notepad++.Notepad++" },
            { name: "Sublime Text", id: "SublimeHQ.SublimeText.4" },
            { name: "Cursor", id: "Anysphere.Cursor" },
            { name: "GitKraken", id: "Axosoft.GitKraken" },
            { name: "Insomnia", id: "Insomnia.Insomnia" },
            { name: "PuTTY", id: "PuTTY.PuTTY" },
            //{ name: "FileZilla", id: "TimKosse.FileZilla.Client" },
            { name: "WinSCP", id: "WinSCP.WinSCP" }
        ]
    },

    ".NET Runtimes": {
        icon: "fa-microsoft",
        colorClass: "cat-dotnet",
        apps: [
            { name: ".NET 8 Desktop", id: "Microsoft.DotNet.DesktopRuntime.8" },
            { name: ".NET 6 Desktop", id: "Microsoft.DotNet.DesktopRuntime.6" },
            { name: ".NET 7 Desktop", id: "Microsoft.DotNet.DesktopRuntime.7" },
            { name: "ASP.NET Core 8", id: "Microsoft.DotNet.AspNetCore.8" },
            { name: ".NET Framework 4.8", id: "Microsoft.DotNet.Framework.DeveloperPack_4" }
        ]
    },

    "Java Runtimes": {
        icon: "fa-coffee",
        colorClass: "cat-java",
        apps: [
            { name: "Temurin JDK 17", id: "EclipseAdoptium.Temurin.17.JDK" },
            { name: "Temurin JDK 21", id: "EclipseAdoptium.Temurin.21.JDK" },
            { name: "Temurin JDK 11", id: "EclipseAdoptium.Temurin.11.JDK" },
            { name: "Temurin JRE 17", id: "EclipseAdoptium.Temurin.17.JRE" },
            { name: "Temurin JRE 21", id: "EclipseAdoptium.Temurin.21.JRE" }
        ]
    },

    "VC++ Runtimes": {
        icon: "fa-cogs",
        colorClass: "cat-vcredist",
        apps: [
            { name: "VC++ 2015-2022 x64", id: "Microsoft.VCRedist.2015+.x64" },
            { name: "VC++ 2015-2022 x86", id: "Microsoft.VCRedist.2015+.x86" },
            { name: "VC++ 2015-2022 ARM64", id: "Microsoft.VCRedist.2015+.arm64" },
            { name: "VC++ 2013 x64", id: "Microsoft.VCRedist.2013.x64" },
            { name: "VC++ 2013 x86", id: "Microsoft.VCRedist.2013.x86" },
            { name: "VC++ 2012 x64", id: "Microsoft.VCRedist.2012.x64" },
            { name: "VC++ 2012 x86", id: "Microsoft.VCRedist.2012.x86" },
            { name: "VC++ 2010 x64", id: "Microsoft.VCRedist.2010.x64" },
            { name: "VC++ 2010 x86", id: "Microsoft.VCRedist.2010.x86" },
            { name: "VC++ 2008 x64", id: "Microsoft.VCRedist.2008.x64" },
            { name: "VC++ 2008 x86", id: "Microsoft.VCRedist.2008.x86" },
            { name: "VC++ 2005 x64", id: "Microsoft.VCRedist.2005.x64" },
            { name: "VC++ 2005 x86", id: "Microsoft.VCRedist.2005.x86" }
        ]
    }
};

window.AppData = AppData;