import express from "express";
import "dotenv/config";
import userRouter from './src/routes/user.route.js'

const app = express();
app.use(express.json());
const port = process.env.PORT || 3001;

app.get("", (req, res) => {
  res.status(200).send("todo ok");
});

app.use("/user", userRouter)

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
