const updateStudentMutably = (student) => {
  student.enrolled = !student.enrolled;
  return student;
};

const student = {
  id: 1,
  firstName: 'Ahmad',
  lastName: 'Salim',
  enrolled: false,
};

const updatedStudent = updateStudentMutably(student);

console.log(updatedStudent);
// Prints {
//   id: 1,
//   firstName: 'Ahmad',
//   lastName: 'Salim',
//   enrolled: true,
// };

console.log(student);
// Prints {
//   id: 1,
//   firstName: 'Ahmad',
//   lastName: 'Salim',
//   enrolled: true,
// };
