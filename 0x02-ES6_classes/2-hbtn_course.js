export default class HolbertonCourse {
  constructor(name, length, students) {
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
    this._name = val;
  }

  set length(val) {
    this._length = val;
  }

  set students(val) {
    this._students = val;
  }
}
