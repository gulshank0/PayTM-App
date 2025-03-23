import express from "express";
import router from "./routes/index.js";
import cors from "cors";

app.use(cors());
app.use(express.json());
const app = express();
const mainRouter = router;

app.use("api/v1", mainRouter);

app.listen(3000, () => {
  console.log("App listen on port 3000");
});
