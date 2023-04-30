const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/User.routes");
const { auth } = require("./middleware/auth.middleware");
const { noteRouter } = require("./routes/Notes.routes");
const cors = require("cors");
const app = express();
require('dotenv').config()
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

app.use(auth);
app.use("/notes", noteRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to db ");
  } catch (err) {
    console.log(err);
    console.log("Cannot connect to db");
  }

  console.log(`Server is running at port ${process.env.port}`);
});
