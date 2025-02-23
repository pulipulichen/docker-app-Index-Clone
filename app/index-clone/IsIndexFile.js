const path = require('path');

const isIndexFile = function (file) {
  // console.log(file)
  let filename = path.basename(file)

  return filename.endsWith('.note.xlsx') || 
    filename.endsWith('.list.xlsx') || 
    filename.endsWith('.note.docx') ||
    filename.startsWith('cluster-windows')
}

module.exports = isIndexFile