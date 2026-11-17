// Initial list of students
const students = [
    { id: 1, name: "Ravi", age: 20 },
    { id: 2, name: "Anil", age: 22 },
    { id: 3, name: "Kavitha", age: 21 }
];
// Create a new student
const newStudent = { id: 4, name: "Suresh", age: 23 };
students.push(newStudent);
//  Read all students
console.log("All Students:", students);
// Read a student by ID
const studentIdToRead = 2;
const studentToRead = students.find(
    student => student.id === studentIdToRead
);
if (studentToRead) {
    console.log(
        `Student with ID ${studentIdToRead}:`,
        studentToRead
    );
} else {
    console.log(
        `Student with ID ${studentIdToRead} not found.`
    );
}
//  Update a student by ID
const studentIdToUpdate = 3;

const updatedStudentData = {
    name: "Kavitha",
    age: 23
};

const studentIndexToUpdate = students.findIndex(
    student => student.id === studentIdToUpdate
);

if (studentIndexToUpdate !== -1) {

    students[studentIndexToUpdate] = {
        ...students[studentIndexToUpdate],
        ...updatedStudentData
    };

    console.log(
        `Student with ID ${studentIdToUpdate} updated:`,
        students[studentIndexToUpdate]
    );

} else {
    console.log(
        `Student with ID ${studentIdToUpdate} not found.`
    );
}

//  Delete a student by ID
const studentIdToDelete = 1;

const studentIndexToDelete = students.findIndex(
    student => student.id === studentIdToDelete
);

if (studentIndexToDelete !== -1) {

    const deletedStudent = students.splice(
        studentIndexToDelete,
        1
    );

    console.log(
        `Student with ID ${studentIdToDelete} deleted:`,
        deletedStudent[0]
    );

} else {
    console.log(
        `Student with ID ${studentIdToDelete} not found.`
    );
}

// Final list of students
console.log("Final list of students:", students);