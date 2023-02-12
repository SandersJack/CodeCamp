// Load HTTP module
const http = require("http");

const hostname = "192.168.0.29";
const port = "7744";

const server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });

    res.end("Hello World\n");
});

server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`)
})