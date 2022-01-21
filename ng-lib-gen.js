const sh = require('shelljs')

const files = [
  'ng-package.json',
  'README.md',
  'package.json',
  'tsconfig.lib.json',
  'tsconfig.lib.prod.json',
]

const args = process.argv.slice(2)
if (args[0]) {
  const projectName = args[0]
  const exist = sh.test('-e', `./projects/${projectName}`) // exists
  if (!exist) {
    console.info(`The project ${projectName} does not exist`)
  } else {
    const lib = `${projectName}-lib`
    sh.exec(`ng g library ${lib}`)
    for (const file of files) {
      sh.cp(`./projects/${lib}/${file}`, `./projects/${projectName}/`)
    }
    sh.touch(`./projects/${projectName}/src/public-api.ts`)
    sh.rm('-R', `./projects/${lib}`)
  }
} else {
  console.info('Please pass a project name -  Example: node ng-lib-gen.js project_name')
}
