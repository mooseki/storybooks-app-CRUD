const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Setting up the connection
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // Making sure the connction is successful
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    // Morgan is going to help to catch if there is a connection error
    console.error(err);

    // Exit the process so it does not just hang
    process.exit(1);
  }
};

// We are exporting the function connectDB by not including () at the end
module.exports = connectDB;
