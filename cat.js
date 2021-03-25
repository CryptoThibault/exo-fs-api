const { existsSync, readFileSync } = require('fs')
if (process.argv.length < 3) {
  console.log('usage: node cat.js file.txt file2.txt ...')
  process.exit(1)
}
for (var i = 2; i < process.argv.length; i++) {
  if (existsSync(process.argv[i])) {
    console.log(readFileSync(process.argv[i], 'utf-8'))
  } else { console.log(`The file n°${i - 1} don't exist`) }
}