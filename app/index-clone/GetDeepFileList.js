const fs = require('fs');
const path = require('path');

function GetDeepFileList(dir, callback, fileList = []) {
    try {
        const files = fs.readdirSync(dir, { withFileTypes: true });
        for (const file of files) {
            const filePath = path.join(dir, file.name);
            if (file.isDirectory()) {
                GetDeepFileList(filePath, callback, fileList);
            } else {
                if (callback(file)) {
                  fileList.push(filePath);
                }
                  
            }
        }
    } catch (err) {
        console.error(`Error reading directory ${dir}:`, err);
    }
    return fileList;
}

module.exports = GetDeepFileList;