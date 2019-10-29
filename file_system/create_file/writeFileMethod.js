// Require File System
const Fs = require('fs')

Fs.writeFile('mynewfile.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// using appendFileSync
newFile = Fs.writeFileSync('mynewfile1.txt', 'Hello content!')

/* The fs.writeFile() method replaces the specified file and content if it exists.
 If the file does not exist,
 a new file, containing the specified content, will be created */
