// Require File System
const Fs = require('fs')

Fs.appendFile('mynewfile.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// using appendFileSync
newFile = Fs.appendFileSync('mynewfile.txt', 'Hello content!')

/*The fs.appendFile() method appends specified content to a file.
 If the file does not exist, the file will be created:*/