import http from "http";

const students = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Create a student POST http://localhost:4000/students payload: { id: 1, name: "Ravi", age: 20 }

  if (method === "POST" && url === "/students") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const newStudent = JSON.parse(body);

      students.push(newStudent);

      res.writeHead(200, {
        "Content-Type": "application/json"
      });

      res.end(
        JSON.stringify({
          message: "Student created successfully",
          data: newStudent
        })
      );
    });
  }

  // Read all students GET http://localhost:4000/students

  else if (method === "GET" && url === "/students") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        message: "Students read successfully",
        data: students
      })
    );
  }

  // Read student by ID GET http://localhost:4000/students/:ID

  else if (method === "GET" && url.startsWith("/students/")) {
    const studentId = parseInt(url.split("/")[2]);

    const student = students.find(
      (std) => std.id === studentId
    );

    if (student) {
      res.writeHead(200, {
        "Content-Type": "application/json"
      });

      res.end(
        JSON.stringify({
          message: "Student details read successfully",
          data: student
        })
      );
    } else {
      res.writeHead(404, {
        "Content-Type": "application/json"
      });

      res.end(
        JSON.stringify({
          message: "Student not found"
        })
      );
    }
  }

  // Update a student by ID PUT http://localhost:4000/students/:ID payload: { id: 1, name: "Kumar", age: 21 }

  else if (method === "PUT" && url.startsWith("/students/")) {
    const studentId = parseInt(url.split("/")[2]);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const updatedStudent = JSON.parse(body);

      const studentIndex = students.findIndex(
        (std) => std.id === studentId
      );
      if (studentIndex !== -1) {
        students[studentIndex] = {
          ...students[studentIndex],
          ...updatedStudent
        };
        res.writeHead(200, {
          "Content-Type": "application/json"
        });
        res.end(
          JSON.stringify({
            message: "Student updated successfully",
            data: students[studentIndex]
          })
        );
      } else {
        res.writeHead(404, {
          "Content-Type": "application/json"
        });

        res.end(
          JSON.stringify({
            message: "Student not found"
          })
        );
      }
    });
  }
  // Delete a student by ID DELETE http://localhost:4000/students/:ID
  else if (method === "DELETE" && url.startsWith("/students/")) {
    const studentId = parseInt(url.split("/")[2]);
    const studentIndex = students.findIndex(
      (std) => std.id === studentId
    );
    if (studentIndex !== -1) {
      const student = students.splice(studentIndex, 1);
      res.writeHead(200, {
        "Content-Type": "application/json"
      });
      res.end(
        JSON.stringify({
          message: "Student deleted successfully",
          data: student[0]
        })
      );
    } else {
      res.writeHead(404, {
        "Content-Type": "application/json"
      });
      res.end(
        JSON.stringify({
          message: "Student not found"
        })
      );
    }
  }
  // Other routes 404 not valid
  else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        message: "Page not found"
      })
    );
  }
});

server.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});