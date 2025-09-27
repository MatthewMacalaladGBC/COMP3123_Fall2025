const express = require("express");
const app = express();

app.use(express.json());

// Serve static files in /public (instruction.html will be at /instruction.html)
app.use(express.static("public"));

// GET /hello
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});

// GET /user?firstname=<value>&lastname=<value>
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Pritesh";
  const lastname = req.query.lastname || "Patel";
  res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// POST /users  (expects JSON array of { firstname, lastname })
app.post("/users", (req, res) => {
  const users = req.body;

  // Checks if users passed in through the post request have both firstname and lastname values
  const invalid = users.find(u => !u.firstname || !u.lastname)
  
  // If invalid values, or if the body is not an array at all, returns an error
  if (!Array.isArray(users) || invalid){
    return res.status(400).json({ error: "Request body must be an array of users, " + 
        "each with their own 'firstname' and 'lastname' values."})
  }

  res.json(users)
});

// Add a catch for unknown endpoints
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));