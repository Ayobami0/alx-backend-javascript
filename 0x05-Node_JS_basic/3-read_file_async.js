const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const students = data.trim().split('\n').slice(1).map((e) => e.split(','));
    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach((e) => {
      if (fields[e[3]] === undefined) {
        fields[e[3]] = [];
      }
      fields[e[3]].push(e[0]);
    });

    for (const key in fields) {
      if (Object.hasOwnProperty.call(fields, key)) {
        console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
      }
    }
    resolve();
  }));
}

module.exports = countStudents;
