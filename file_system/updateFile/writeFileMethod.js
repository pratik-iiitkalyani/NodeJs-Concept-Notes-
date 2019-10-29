// Require File System
const Fs = require('fs')

Fs.writeFile('mynewfile.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// using writeFileSync
newFile = Fs.writeFileSync('mynewfile.txt', 'Hello content!')

/* The fs.writeFile() method replaces the specified file and content*/