const Url = require('url');    // Url Module to Parse the Query String
const Adr = 'http://localhost:8080/default.htm?year=2017&month=february';

const Parsed = Url.parse(Adr, true);

/*Url.parse() method,
 and it will return a URL object with each part of the address as properties*/

console.log(Parsed.host); //returns 'localhost:8080'
console.log(Parsed.pathname); //returns '/default.htm'
console.log(Parsed.search); //returns '?year=2017&month=february'

const Qdata = Parsed.query; //returns an object: { year: 2017, month: 'february' }
console.log(Qdata.month);