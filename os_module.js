const os = require("os");

const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const cpuArch = os.arch();

console.log('Total Memory : ' + totalMemory);
console.log(`total freememory : ${freeMemory}`);
console.log(`CPU architecture: ${cpuArch}`)
console.log('List of network Interfaces: ' + os.networkInterfaces());
console.log('OS default directory for temp files : ' + os.tmpdir ());

console.log("Endianness of system: " + os.endianness()); 
  
// It returns hostname of system 
console.log("Hostname: " + os.hostname()); 
  
// It return operating system name 
console.log("Operating system name: " + os.type()); 
  
// It returns the platform of os 
console.log('operating system platform: ' + os.platform()); 
  
// It returns the operating systems release. 
console.log('OS release : ' + os.release()); 