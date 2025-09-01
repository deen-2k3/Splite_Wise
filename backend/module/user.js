import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // ✅ email should be unique
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: "",
  },
});
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, name: this.name },
    process.env.JWT_PRIVATE_KEY,
    { expiresIn: "15m" }
  );
  return token;
};

const User = mongoose.model("User", userSchema);
export default User;
