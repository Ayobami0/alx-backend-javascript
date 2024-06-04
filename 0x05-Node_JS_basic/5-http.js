const http = require('http');
const fs = require('fs');
const process = require('process');

const path = process.argv[2];
const app = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/students') {
    new Promise((resolve, reject) => fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      let result = '';
      const students = data.trim().split('\n').slice(1).map((e) => e.split(','));

      result += `This is the list of our students\nNumber of students: ${students.length}`;

      const fields = {};
      students.forEach((e) => {
        if (fields[e[3]] === undefined) {
          fields[e[3]] = [];
        }
        fields[e[3]].push(e[0]);
      });

      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          result += `\nNumber of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`;
        }
      }
      resolve(result);
    })).then((d) => { res.end(d); }).catch((e) => { throw e; });
  } else if (url === '/') { res.end('Hello Holberton School!'); }
});

module.exports = app;

app.listen(1245);
