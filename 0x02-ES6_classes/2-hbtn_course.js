export default class HolbertonCourse {
  constructor(name = '', length = 0, students = []) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name = '') {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(length = 0) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students = []) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    if (!students.every((student) => typeof student === 'string')) {
      throw new TypeError('Student must be a string');
    }
    this._students = students;
  }
}
