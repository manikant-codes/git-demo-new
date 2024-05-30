const student = {
  name: "Manikant Jha",
  rollNo: 10,
  physics: 77,
  chemistry: 66,
  math: 55,
};

function calcPercentage() {
  const total = 300;
  const marksTotal = student.math + student.chemistry + student.physics;
  const percentage = (marksTotal * 100) / total;
  console.log("percentage", percentage);
}

calcPercentage();

// const employee = new Object({
//   name: "Manikant",
//   employeeCode: 10,
//   address: "Surat",
// });

// employee.role = "Teacher";

// console.log(student);
// console.log(employee);
