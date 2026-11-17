import http from 'http';

const server = http.createServer((req, res) => {
    // Create Student POST http://localhost:4000/students
    if (req.method === 'POST' && req.url === '/students') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Student Created</h1>");
        res.end();
    }
    // Read All Students GET http://localhost:4000/students
    else if (req.method === 'GET' && req.url === '/students') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Student List</h1>");
        res.end();
    }
    // Read Student By ID GET http://localhost:4000/students/1
    else if (req.method === 'GET' && req.url === '/students/1') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Student Details</h1>");
        res.end();
    }
    // Update Student By ID PUT http://localhost:4000/students/1  
    else if (req.method === 'PUT' && req.url === '/students/1') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Student Updated</h1>");
        res.end();
    }
    // Delete Student By ID DELETE http://localhost:4000/students/1
    else if (req.method === 'DELETE' && req.url === '/students/1') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Student Deleted</h1>");
        res.end();
    }
    // Handle 404 Not Found For any other routes
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 Not Found</h1>");
        res.end();
    }

});
server.listen(4000, () => {
    console.log("Server running at http://localhost:4000/");
});