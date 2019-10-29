// Require File System
const Fs = require('fs')

Fs.open('mynewfile1.txt', 'w', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// using openSync
newFile = Fs.openSync('mynewfile2.txt', 'w')

/* The fs.open() method takes a "flag" as the second argument,
if the flag is "w" for "writing", the specified file is opened for writing.
If the file does not exist, an empty file is created:*/