

const isIndexFile = function (file) {
  // console.log(file)
  return file.endsWith('.note.xlsx') || 
    file.endsWith('.note.docx') ||
    file.startsWith('cluster-windows')
}

module.exports = isIndexFile