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
      
      let result = IsIndexFile(filePath)
      // console.log(filePath, result)
      return result
    })

    for (let i = 0; i < indexFileList.length; i++) {
      let relativePath = indexFileList[i]
      let indexFilePath = path.join(directoryPath, relativePath)
      let cloneFilePath = path.join(directoryPath + '.index', relativePath)
      // console.log(cloneFilePath)

      let cloneFolderPath = path.dirname(cloneFilePath)
      fs.mkdirSync(cloneFolderPath, {recursive: true})

      fs.copyFileSync(indexFilePath, cloneFilePath)
      // console.log(cloneFolderPath)
      // console.log(noteFilePath, cloneFolderPath)

      // ShellExec(`cp -r ${noteFilePath} ${cloneFolderPath}`)
      // ShellSpawn(`cp -r ${noteFilePath} ${cloneFolderPath}`, { shell: true })
    }
  }
}

main()