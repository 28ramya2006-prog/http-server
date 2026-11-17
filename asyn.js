const fs = require("fs");
console.log("1. Program started");

fs.writeFile("example.txt", "Hello, Node.js!", (err) => {
    if (err) {
        console.log("Error while writing file:", err);
        return;
    }
    console.log("2. File created and data written");
});
console.log("3. Program continues");

fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error while reading file:", err);
        return;
    }
    console.log("4. File data:", data);
});
console.log("5. Program ended");