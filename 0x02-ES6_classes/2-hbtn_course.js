export default class HolbertonCourse {
  constructor(name, length, students) {
    if (length !== Number) {
      throw new Error('Length must be a number');
    }

    if (students !== Array) {
      throw new Error('Students must be an array');
    }

    if (name !== String) {
      throw new Error('Name must be a string');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(val) {
    if (val !== String) {
      throw new Error('Name must be a string');
    }
    this._name = val;
  }

  set length(val) {
    if (val !== Number) {
      throw new Error('Length must be a number');
    }
    this._length = val;
  }

  set students(val) {
    if (val !== Array) {
      throw new Error('Students must be an array');
    }
    this._students = val;
  }
}
