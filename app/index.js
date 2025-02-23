// const ShellSpawn = require('./lib/ShellSpawn')
const ShellExec = require('./lib/ShellExec')
const GetExistedArgv = require('./lib/GetExistedArgv')

const path = require('path')
const fs = require('fs')

const IsIndexFile = require('./index-clone/IsIndexFile')
const BuildCloneFolder = require('./index-clone/BuildCloneFolder')
const GetDeepFileList = require('./index-clone/GetDeepFileList')

// -------------------------------------------------------------




let main = async function () {
  
  let files = GetExistedArgv()
  for (let i = 0; i < files.length; i++) {
    let directoryPath = files[i]
    const stats = fs.statSync(directoryPath);
    if (stats.isDirectory(directoryPath) === false) {
      // directoryPath = path.dirname(directoryPath)
      continue
    }

    let indexFileList = GetDeepFileList(directoryPath, (filePath) => {
      console.log(filePath)
      return IsIndexFile(filePath)
    })
  }
}

main()