const mongoose = require("mongoose");
module.exports = connect = async () => {
  try {
    //database = pos-system
    await mongoose.connect("mongodb://127.0.0.1:27017/pos-system", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to mongodb");
  } catch (error) {
    console.error(error);
  }
};
