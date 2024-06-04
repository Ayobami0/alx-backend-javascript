import { readFile } from 'fs';

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      const students = data.trim().split('\n').slice(1).map((e) => e.split(','));

      const fields = {};
      students.forEach((e) => {
        if (fields[e[3]] === undefined) {
          fields[e[3]] = [];
        }
        fields[e[3]].push(e[0]);
      });

      resolve(fields);
    });
  });
}
