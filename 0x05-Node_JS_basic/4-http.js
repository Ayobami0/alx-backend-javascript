const http = require('http');

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

module.exports = app;

app.listen(1245);
