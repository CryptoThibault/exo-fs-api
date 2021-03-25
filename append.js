const { readFileSync, writeFileSync, existsSync } = require('fs')
if (process.argv.length < 4) {
  console.log('usage: node cp.js src1.txt src2.txt ... dst.txt')
  process.exit(1)
}
var text = ''
for (var i = 2; i < process.argv.length - 1; i++) {
  if (existsSync(process.argv[i])) {
    text += `##${process.argv[i]}\n`
    text += readFileSync(process.argv[i], 'utf-8')
    text += '\n\n'
  } else { console.log(`The file n°${i - 1} don't exist`) }
}
writeFileSync(process.argv[process.argv.length - 1], text)