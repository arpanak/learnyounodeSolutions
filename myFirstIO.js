var fs = require('fs');
var filePath = process.argv[2];
var content = fs.readFileSync(filePath).toString().split('\n');
console.log(content.length -1)

