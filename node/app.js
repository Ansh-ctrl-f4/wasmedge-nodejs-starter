const { reverse_string } = require('../pkg/wasmedge_nodejs_starter_lib.js');
const http = require('http');
const url = require('url');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;

  if (!queryObject['text']) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Please use the format: curl http://${hostname}:${port}/?text=YourString\n`);
  } else {
    const inputString = queryObject['text'];
    const reversedText = reverse_string(inputString);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(reversedText + '\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Test with: curl http://localhost:${port}/?text=HelloRust`);
});
