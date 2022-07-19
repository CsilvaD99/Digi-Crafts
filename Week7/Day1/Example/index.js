// console.log("Hello World, I am node in index.js");

// const http = require("http");

// const Hostname = "127.0.0.1";
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${Hostname}`);
// });

const cowsay = require("cowsay");
console.log(cowsay.say({ text: "I'm a module'" }));
