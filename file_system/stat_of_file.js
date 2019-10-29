// Get File Information

// Require File System
const Fs = require('fs')
const Stats = Fs.statSync('file.html');

console.log(Stats.isDirectory());

/*
stats.isFile()-->Returns true if file type of a simple file.

stats.isDirectory()-->Returns true if file type of a directory.

stats.isBlockDevice()-->Returns true if file type of a block device.
	
stats.isCharacterDevice()-->Returns true if file type of a character device.

stats.isSymbolicLink()-->Returns true if file type of a symbolic link.
	
stats.isFIFO()-->Returns true if file type of a FIFO.

stats.isSocket()-->Returns true if file type of asocket.
*/