// Require File System
const Fs = require('fs')

Fs.rename('index.html','file.html', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// using renameSync
newFile = Fs.renamesSync('index.html', 'file.html')

// The fs.rename() method renames the specified file