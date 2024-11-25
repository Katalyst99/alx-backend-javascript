const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (data) {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      lines.shift();

      console.log(`Number of students: ${lines.length}`);

      const flds = {};
      for (const line of lines) {
        const student = line.split(',');
        if (!flds[student[3]]) {
          flds[student[3]] = [];
        }
        flds[student[3]].push(student[0]);
      }

      for (const [fld, val] of Object.entries(flds)) {
        console.log(`Number of students in ${fld}: ${val.length}. List: ${val.join(', ')}`);
      }

      resolve(data);
    } else {
      reject(new Error('Cannot load the database'));
    }
  });
});

module.exports = countStudents;
