export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((s) => s.location === city)
    .map((s) => {
      const grade = newGrades.filter((g) => g.studentId === s.id);
      return {
        ...s,
        grade: grade.length === 0 ? 'N/A' : grade[0].grade,
      };
    });
}
