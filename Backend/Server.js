const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Backend server is running 🚀");
});

// Example API Route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Example POST Route
app.post("/api/data", (req, res) => {
  const data = req.body;
  console.log("Received:", data);
  res.json({ status: "Data received", data });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
