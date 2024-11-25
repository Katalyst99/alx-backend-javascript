const fs = require('fs');

function countStudents(path) {
  try {
    const fdata = fs.readFileSync(path, 'utf-8').toString().split('\n');
    fdata.shift();
    if (fdata.slice(-1)[0] === '') {
      fdata.pop();
    }
    console.log(`Number of students: ${fdata.length}`);
    const flds = {};
    for (const line of fdata) {
      const student = line.split(',');
      if (!flds[student[3]]) {
        flds[student[3]] = [];
      }
      flds[student[3]].push(student[0]);
    }
    for (const [fld, val] of Object.entries(flds)) {
      if (fld) {
        console.log(`Number of students in ${fld}: ${val.length}. List: ${val.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
