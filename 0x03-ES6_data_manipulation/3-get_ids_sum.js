export default function getStudentIdsSum(students) {
  return students.reduce((sum, cur) => sum + cur);
}
