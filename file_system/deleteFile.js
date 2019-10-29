// Require File System
const Fs = require('fs')

Fs.unlink('index.html', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// using unlinkSync
newFile = Fs.unlinkSync('index.html')

// The fs.unlink() method deletes the specified file: