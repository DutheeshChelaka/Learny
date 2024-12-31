const express = require("express");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Simple Route
app.get("/", (req, res) => {
  res.send("Backend is running!!!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
