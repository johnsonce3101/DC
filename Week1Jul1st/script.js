console.log("Hello World")

const http = require('http');
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Conact-Type", 'text/plain');
    res.end("Sup Si")
});

console.log(server);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`)
});