# File Organizer

## Overview
The **File Organizer** module formats directories and their nested files efficiently.

### Usage

- **As a Module**: Import the `formatFiles` function (default export) and provide a relative or absolute path to format that folder and its contents.
  
- **As a Standalone Script**: Execute the following command to format all folders and files while removing any empty directories:
  ```bash
  node ./index.js
  ```


### Supported Formats
The following file formats are supported:

- **Images**: jpg, jpeg, png, gif, bmp, tiff, tif, svg, webp, heif, heic, raw, ico, eps, ai
- **Documents**: pdf, doc, docx, xls, xlsx, ppt, pptx, txt, rtf, odt, wps, xml, json, csv, md, tex, pages
- **Audio**: mp3, wav, aac, ogg, flac, m4a, wma, alac, aiff, opus, ra
- **Video**: mp4, avi, mkv, mov, wmv, flv, webm, m4v, mpeg, mpg, 3gp, 3g2, f4v, vob
- **Archives**: zip, rar, tar, gz, 7z, bz2, xz, iso, cab, z
- **Executables**: exe, bat, sh, msi, app, apk, bin, jar, cmd
- **Code**: html, css, js, py, java, cpp, c, php, rb, go, swift, rs, ts, pl, scala, vb
- **Databases**: sql, db, sqlite, mdb, accdb, csv, json
- **Fonts**: ttf, otf, woff, woff2, eot, fon, svg
- **Markup**: xml, json, yaml, md, html, xhtml
- **Other**: log, ini, cfg, bin, dmg, iso, torrent, xap, plist

### Customization
To add or modify supported formats, edit the `fileFormats` object in the code.