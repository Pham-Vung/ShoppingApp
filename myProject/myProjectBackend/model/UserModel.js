const mongoose = require("mongoose")

const userDb = mongoose.createConnection(
  'mongodb://localhost:27017/App',
  function (err) {
    if (err) {
      console.error('Fail to connect to App database' + err);

    } else {
      console.error('Successfully connected to App database');
    }
  }
)

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    phone: String,
  },
  {
    collection: "Users",
  }
)
const UserModel = userDb.model("Users", UserSchema);

module.exports = UserModel;