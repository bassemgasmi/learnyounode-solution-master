// 03- my first I/O!

const fs = require('fs')

// For creat a file
//fs.appendFileSync('file.txt','data')

const str=fs.readFileSync(process.argv[2]).toString()
let line = str.split('\n').length -1
console.log(line);