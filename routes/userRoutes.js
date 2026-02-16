const express = require('express');
const router = express.Router();

let users = [
  { email: "test@test.com", password: "1234" }
];

// LOGIN (Intentional Bugs)
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(500).json({ message: "User not found" }); // ❌ wrong status
  }

  if (user.password !== password) {
    return res.status(200).json({ message: "Login Success" }); // ❌ logic bug
  }

  res.json({ message: "Login Success" });
});

// REGISTER (Duplicate allowed)
router.post('/register', (req, res) => {
  const { email, password } = req.body;

  users.push({ email, password }); // ❌ no validation
  res.json({ message: "Registered" });
});

// SQL simulation
router.get('/sql-error', (req, res) => {
  res.status(200).json({ message: "Database crashed" }); // ❌ wrong status
});

module.exports = router;
