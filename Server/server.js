//import express module to create a server
const express = require("express");

const app = express();

const db = require("./models");

const port = 3001;

//import cors module
const cors = require("cors");

//middleware-1
app.use(cors());

//middleware-2
app.use(express.urlencoded({ extended: true }));

//middleware-3
app.use(express.json());

//importing userApi file
const userApi = require("./userApi");

//onnection to userApi
app.use("/server", userApi);

//connecting to database
db.sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log("Error in database connection : ", err));
