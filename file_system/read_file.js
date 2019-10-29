// Read Content of the file	

// Require File System
const Fs = require('fs')
/***
 * implementation of readFileSync
 */
var data = Fs.readFileSync('file.html');
console.log(data.toString());
console.log("Program Ended");

/***
 * implementation of readFile 
 */
Fs.readFile('file.html', function (err, data) {
    if (err) return console.error(err);
   console.log(data.toString());
});

53

/*
fs.readFile takes a call back function, If you simply replace that with fs.readFileSync,
you need to be aware that
it does not take a callback so your callback which calls response.send will never
get called and therefore the response will never end and it will timeout.
*/