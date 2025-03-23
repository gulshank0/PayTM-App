import jwt from "jsonwebtoken";
import express from "express";
import zod from "zod";
import User from "../db";
import JWT_SECRET from "../config";
const router = express.Router();

const signupSchema = zod.object({
  userName: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: string(),
});

router.post("/signup", async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.json({
      message: "Email Already Taken / Incorrect inputs",
    });
  }
  const user = User.findOne({
    userName: body.userName,
  });
  if (user._id) {
    return res.json({
      message: "Email Already Taken/ Incorrect inputs",
    });
  }
  const dbUser = await User.create(body);
  const token = jwt.sign(
    {
      userId: dbUser._id,
    },
    JWT_SECRET,
  );
  res.json({
    message: "User created successfully ",
    token: token,
  });
});
export default router;
