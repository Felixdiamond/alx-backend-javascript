const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const students = lines.slice(1).map((line) => line.split(',')).filter((student) => student.length === 4);
    console.log(`Number of students: ${students.length}`);
    const fields = {};
    students.forEach((student) => {
      if (!fields[student[3]]) fields[student[3]] = [];
      fields[student[3]].push(student[0]);
    });
    Object.keys(fields).forEach((field) => {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
