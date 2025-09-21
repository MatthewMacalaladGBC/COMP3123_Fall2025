var http = require("http");
//TODO - Use Employee Module here
var employees = require("./Employee");

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, {"Content-Type": "text/html"});
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<h1>Welcome to Lab Exercise 03</h1>")
            res.end();
        } else if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(JSON.stringify(employees))
            res.end();
        } else if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            let names = employees.map(employee => `${employee.firstName} ${employee.lastName}`);
            names.sort();
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(JSON.stringify(names))
            res.end();
        } else if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            let salaries = employees.map(employee => employee.Salary);
            let total_sal = salaries.reduce((currSum, num) => currSum + num);
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(JSON.stringify({totalSalary: total_sal}))
            res.end();
        } else {
            res.writeHead(405, {"Content-Type": "text/html"});
            res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
        }
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})