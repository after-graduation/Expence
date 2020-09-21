const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    let MONGO_URL='mongodb+srv://Hammad:00000@cluster0.hsvpu.mongodb.net/expenseTracker?retryWrites=true&w=majority'
    const conn = await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
}

module.exports = connectDB;