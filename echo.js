var tab = []
if (process.argv.length < 3) {
  console.log('usage: node echo.js text')
  process.exit(1)
}
for (var i = 2; i < process.argv.length; i++) {
  tab.push(process.argv[i])
}
console.log(tab.join(' '))