const fs = require('fs');
const path = require('path');

const BuildCloneFolder = function (directoryPath) {

  let folderName = path.basename(directoryPath)
  let cloneFolderPath = path.join(directoryPath, folderName + '.index')

  if (fs.existsSync(cloneFolderPath)) {
    return false
  }

  fs.mkdirSync(cloneFolderPath, { recursive: true })
  return true
}

module.exports = BuildCloneFolder;
