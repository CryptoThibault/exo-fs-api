const { readFileSync, existsSync } = require('fs')
let nblign = 10
let indexFile = 2

if (process.argv.length !== 3 && process.argv.length !== 5) {
  console.log('usage: node tail.js [-n nb] file.txt')
  process.exit(1)
}
if (process.argv[2] === '-n') {
  if (isNaN(process.argv[3])) {
    console.log('entrer le nombre de lignes que vous voulez afficher')
    process.exit(1)
  }
  nblign = Number(process.argv[3])
  indexFile += 2
}
if (!existsSync(process.argv[indexFile])) {
  console.log('This file don\'t exist')
  process.exit(1)
}
const text = readFileSync(process.argv[indexFile], 'utf-8').split('\n').slice(-nblign).join('\n')
console.log(text)