const fs = require('fs');

const readDatabase = (fPath) => new Promise((resolve, reject) => {
  fs.readFile(fPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    const lines = data.trim().split('\n');
    lines.shift();

    const flds = {};
    for (const line of lines) {
      const student = line.split(',');
      if (!flds[student[3]]) {
        flds[student[3]] = [];
      }
      flds[student[3]].push(student[0]);
    }
    resolve(flds);
  });
});

export default readDatabase;
module.exports = readDatabase;
