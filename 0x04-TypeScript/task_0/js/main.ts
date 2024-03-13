interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "Abuja",
};

const studentsList: Student[] = [student1, student2];

function createTable(students: Student[]): void {
  const table = document.createElement("table");
  students.forEach((student) => {
    const row = table.insertRow();
    const firstName = row.insertCell();
    const location = row.insertCell();
    firstName.innerHTML = student.firstName;
    location.innerHTML = student.location;
  });
    document.body.appendChild(table);
}

createTable(studentsList);
