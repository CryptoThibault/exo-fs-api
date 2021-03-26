const { readFileSync, existsSync } = require('fs')
var nblign = 10
var indexFile = 2

if (process.argv.length != 3 && process.argv.length != 5) {
  console.log('usage: node tail.js (-n nb) file.txt')
  process.exit(1)
}
if (process.argv[2] === '-n') {
  nblign = process.argv[3]
  indexFile += 2
  if (Number(process.argv[3])) {
    console.log('entrer le nombre de lignes que vous voulez afficher')
    process.exit(1)
  }
}
if (!existsSync(process.argv[indexFile])) {
  console.log('This file don\'t exist')
  process.exit(1)
}
const text = readFileSync(process.argv[indexFile], 'utf-8').trim('').split('\n')
console.log(text.splice(text.length - nblign, text.length).join('\n'))