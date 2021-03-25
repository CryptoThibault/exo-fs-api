const { readFileSync, writeFileSync, existsSync } = require('fs')
if (process.argv.length != 4) {
  console.log('usage: node cp.js src.txt dst.txt')
  process.exit(1)
}
if (existsSync(process.argv[2])) {
  const text = readFileSync(process.argv[2], 'utf-8')
  writeFileSync(process.argv[3], text)
} else { console.log('This file don\'t exist') }