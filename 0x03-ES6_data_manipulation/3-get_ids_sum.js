export default function getStudentIdsSum(students) {
  return students.map((s) => s.id).reduce((sum, cur) => sum + cur);
}
