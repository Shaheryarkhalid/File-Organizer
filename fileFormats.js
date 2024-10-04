const fileFormats = {
    images: [
        'jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'tif', 'svg', 'webp', 'heif', 'heic', 'raw', 'ico', 'eps', 'ai'
    ],
    documents: [
        'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'rtf', 'odt', 'wps', 'xml', 'json', 'csv', 'md', 'tex', 'pages'
    ],
    audio: [
        'mp3', 'wav', 'aac', 'ogg', 'flac', 'm4a', 'wma', 'alac', 'aiff', 'opus', 'ra'
    ],
    video: [
        'mp4', 'avi', 'mkv', 'mov', 'wmv', 'flv', 'webm', 'm4v', 'mpeg', 'mpg', '3gp', '3g2', 'f4v', 'vob'
    ],
    archives: [
        'zip', 'rar', 'tar', 'gz', '7z', 'bz2', 'xz', 'iso', 'cab', 'z'
    ],
    executables: [
        'exe', 'bat', 'sh', 'msi', 'app', 'apk', 'bin', 'jar', 'cmd'
    ],
    code: [
        'html', 'css', 'js', 'py', 'java', 'cpp', 'c', 'php', 'rb', 'go', 'swift', 'rs', 'ts', 'pl', 'scala', 'vb'
    ],
    databases: [
        'sql', 'db', 'sqlite', 'mdb', 'accdb', 'csv', 'json'
    ],
    fonts: [
        'ttf', 'otf', 'woff', 'woff2', 'eot', 'fon', 'svg'
    ],
    markup: [
        'xml', 'json', 'yaml', 'md', 'html', 'xhtml'
    ],
    other: [
        'log', 'ini', 'cfg', 'bin', 'dmg', 'iso', 'torrent', 'xap', 'plist'
    ]
};
export default fileFormats