const http = require("http");
const serverPort = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("JavaScript");
});

server.listen(serverPort, () => {
  console.log(`Server running on port ${serverPort}`);
});

// The command I used to run the Node.js application is node index.js
