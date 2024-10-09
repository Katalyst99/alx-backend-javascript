interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  }

const student1: Student = {
  firstName: "Stephen",
  lastName: "Hawkins",
  age: 20,
  location: "London",
};

const student2: Student = {
  firstName: "Betty",
  lastName: "Holberton",
  age: 23,
  location: "Philadelphia",
};

const studentsList: Student[] = [student1, student2];

// Create a table using vanilla JavaScript
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// Loop over the students and add a row for each student
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  // Create cells for firstName and location
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  // Append cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // Append the row to the table body
  tbody.appendChild(row);
});

// Append the table body to the table
table.appendChild(tbody);

// Append the table to the document's body
document.body.appendChild(table);
