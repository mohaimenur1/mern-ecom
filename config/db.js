const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const coon = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connect: ${coon.connection.host}`);
  } catch (error) {
    console.log("faild");
  }
};

module.exports = connectDb;
