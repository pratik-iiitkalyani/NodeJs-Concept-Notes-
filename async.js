// Set Timeout

console.log("before");
setTimeout(() => {
	console.log("Reading a user from database");
}, 2000);
console.log("after");

// Output will be like that

// before
// after
// Reading a user from database
