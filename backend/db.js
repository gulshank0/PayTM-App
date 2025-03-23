import mongoose from "mongoose";
mongoose.connect(process.env.MONGO_DB);

const userSchema = mongoose.Schema({
  userName: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", userSchema);

export default User;
