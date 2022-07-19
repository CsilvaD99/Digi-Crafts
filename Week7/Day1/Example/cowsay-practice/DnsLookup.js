const dns = require('dns');
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question("domain Name: ", functioin (url) {
    readline.close();
    dns.lookup(url, function (error, address){
        if (error) {
            console.log(error.message);
            return;
        }
        console.log("IP Address: ", address);
    })
})