const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String,  },
  userName: { type: String,  },
  lastLoginDate: { type: Date,  }

});

const User = mongoose.model("User", userSchema);

module.exports = User;
