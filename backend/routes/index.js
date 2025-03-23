import express from "express";
import userRouter from "./user.js" 
const router = express.Router();
app.use("/user", userRouter);

export default router;
