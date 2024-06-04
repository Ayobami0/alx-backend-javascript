import readDatabase from '../utils';

const process = require('process');

const { argv } = process;

const database = argv[2];
export default class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(database).then((data) => {
      let msg = 'This is the list of our students';

      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          msg += `\nNumber of students in ${key}: ${data[key].length}. List: ${data[key].join(', ')}`;
        }
      }
      return response.status(200).send(msg);
    }).catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    return readDatabase(database).then((data) => response.status(200).send(`List: ${data[major].join(', ')}`)).catch(() => { response.status(500).send('Cannot load the database'); });
  }
}
