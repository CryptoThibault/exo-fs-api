const { existsSync, readFileSync } = require('fs')
const commandlist = ['-l', '-w', '-c']
var indexFile = 2

if (process.argv.length != 3 && process.argv.length != 4) {
  console.log('usage: node wc.js (-l,-w,-c) file.txt')
  process.exit(1)
}
if (commandlist.includes(process.argv[2])) { indexFile++ }
if (!existsSync(process.argv[indexFile])) {
  console.log('This file don\'t exist')
  process.exit(1)
}
const text = readFileSync(process.argv[indexFile], 'utf-8').trim('')
const nbcara = text.split('').length
const nbword = text.split(' ').length
const nblign = text.split('\n').length

if (process.argv[2] === '-l') { console.log(`${nblign} ${process.argv[indexFile]}`) }
else if (process.argv[2] === '-w') { console.log(`${nbword} ${process.argv[indexFile]}`) }
else if (process.argv[2] === '-c') { console.log(`${nbcara} ${process.argv[indexFile]}`) }
else { console.log(`${nblign}    ${nbword}   ${nbcara} ${process.argv[indexFile]}`) }
