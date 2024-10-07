function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((obj) => obj.location === city).map((obj) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === obj.id);
    return {
      ...obj,
      grade: studentGrade ? studentGrade.grade : 'N/A',
    };
  });
}

export default updateStudentGradeByCity;
