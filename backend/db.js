import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://gulshan63072:u5qBT7na6yG92aT0@kirat.i9fgd.mongodb.net/paytm",
);

const userSchema = mongoose.Schema({
  userName: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", userSchema);

export default User;
