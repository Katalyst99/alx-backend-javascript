const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (data) {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      lines.shift();
      const content = [];
      content.push(`Number of students: ${lines.length}`);

      const flds = {};
      for (const line of lines) {
        const student = line.split(',');
        if (!flds[student[3]]) {
          flds[student[3]] = [];
        }
        flds[student[3]].push(student[0]);
      }

      for (const [fld, val] of Object.entries(flds)) {
        content.push(`Number of students in ${fld}: ${val.length}. List: ${val.join(', ')}`);
      }

      resolve(content);
    } else {
      reject(new Error('Cannot load the database'));
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2]).then((content) => {
    res.send(`This is the list of our students\n${content.join('\n')}`);
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port, () => {});

module.exports = app;
