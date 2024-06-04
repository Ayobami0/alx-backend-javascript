const fs = require('node:fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
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
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
