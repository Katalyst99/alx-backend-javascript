import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    const path = process.argv[2];
    try {
      const flds = await readDatabase(path);
      let resp = 'This is the list of our students\n';
      for (const [fld, val] of Object.entries(flds).sort()) {
        resp += `Number of students in ${fld}: ${val.length}. List: ${val.join(', ')}\n`;
      }
      response.status(200).send(response.trim());
    } catch (err) {
      response.send(500, 'Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const path = process.argv[2];
    if (major !== 'CS' && major !== 'SWE') {
      response.send(500, 'Major parameter must be CS or SWE');
      return;
    }
    try {
      const flds = await readDatabase(path);
      const val = flds[major] || [];
      response.send(200, `List: ${val.join(', ')}`);
    } catch (err) {
      response.send(500, 'Cannot load the database');
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
