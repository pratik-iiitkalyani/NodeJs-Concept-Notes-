// Require File System
const Fs = require('fs')

Fs.appendFile('mynewfile.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// using appendFileSync
newFile = Fs.appendFileSync('mynewfile.txt', 'Hello content!')


/*The fs.appendFile() method appends the specified 
content at the end of the specified file */

