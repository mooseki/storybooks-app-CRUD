const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // Imports the function built in the db.js file

// Load config
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(`Server running on ${process.env.NODE_ENV} mode on PORT ${PORT}`)
);
