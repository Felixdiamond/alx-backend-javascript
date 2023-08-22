const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function readDatabase(filePath) {
  try {
    const data = await readFile(filePath, 'utf8');
    const students = data.split('\n').slice(1);
    const fields = {};
    for (const student of students) {
      if (student) {
        const [, , field] = student.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(student.split(',')[0]);
      }
    }
    return fields;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
