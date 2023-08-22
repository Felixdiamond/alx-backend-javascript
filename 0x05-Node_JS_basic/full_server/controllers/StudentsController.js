const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await readDatabase(process.argv[2]);
      const students = Object.entries(data).map(([field, names]) => `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      response.status(200).send(`This is the list of our students\n${students.join('\n')}`);
    } catch (err) {
      response.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!['SWE', 'CS'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const data = await readDatabase(process.argv[2]);
      response.status(200).send(`List: ${data[major].join(', ')}`);
    } catch (err) {
      response.status(500).send(err.message);
    }
  }
}

module.exports = StudentsController;
