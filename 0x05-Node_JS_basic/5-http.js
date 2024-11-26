const http = require('http');
const fs = require('fs');

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

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    countStudents(process.argv[2]).then((content) => {
      res.end(`This is the list of our students\n${content.join('\n')}`);
    }).catch((error) => {
      res.end(error.message);
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

app.listen(port, () => {});

module.exports = app;
