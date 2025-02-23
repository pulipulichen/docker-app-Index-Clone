const fs = require('fs');
const path = require('path');

function GetDeepFileList(dir, callback, baseDir, fileList = []) {
    if (!baseDir) {
      baseDir = dir
    }

    try {
        const files = fs.readdirSync(dir, { withFileTypes: true });
        for (const file of files) {
            const filePath = path.join(dir, file.name);
            const relativePath = path.relative(baseDir, filePath);
            if (file.isDirectory()) {
                GetDeepFileList(filePath, callback, baseDir, fileList);
            } else {
                if (callback(file)) {
                  fileList.push(relativePath);
                }
                  
            }
        }
    } catch (err) {
        console.error(`Error reading directory ${dir}:`, err);
    }
    return fileList;
}

module.exports = GetDeepFileList;