const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const loger = require("./middlewares/loger")

dotenv.config();

const { PORT, API_URL, DB_URL } = process.env;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("connected to mongo");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(bodyParser.json());
app.use(loger)
app.use(userRouter);
app.use(bookRouter);

app.get("*", (req, res) => {
  res.status(404).send("Маршрут не найден");
});
app.listen(PORT, () => {
  console.log(`start on ${API_URL}:${PORT}`);
});
