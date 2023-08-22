const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function readDatabase(filePath) {
  try {
    const data = await readFile(filePath, 'utf8');
    const students = data.split('\n').slice(1);
    const fields = {};
    students.forEach((student) => {
      if (student) {
        const studentData = student.split(',');
        const field = studentData[2];
        if (!fields[field]) fields[field] = [];
        fields[field].push(studentData[0]);
      }
    });
    return fields;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
