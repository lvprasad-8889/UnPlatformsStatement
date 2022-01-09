//import express module
const express = require("express");

const router = express.Router();

const db = require("./models");

//getting complete data from the database
router.get("/completedata", (req, res) => {
  db.posttable
    .findAll()
    .then((posttabledata) => {
      res.send(posttabledata);
    })
    .catch((err) => {
      console.log("err in fetching data ", err);
    });
});

//initialising the connent of table
router.post("/new", (req, res) => {
  db.posttable
    .create({
      views: 0,
      likes: 0,
      comments: [],
      shares: 0,
    })
    .then((toad) => {
      res.send(toad);
    })
    .catch((err) => {
      console.log("err in creating data ", err);
    });
});

//updating view,likes,comments,shares based on Id
router.put("/upd", (req, res) => {
  console.log("entering in to put", req.body);
  db.posttable
    .update(
      {
        views: req.body.views,
        likes: req.body.likes,
        comments: req.body.comments,
        shares: req.body.shares,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    )
    .then(() => {
      res.send("success");
    })
    .catch((err) => {
      console.log("err in updating  data 1 ", err);
    });
});

//only updating views based on Id
router.put("/put", (req, res) => {
  console.log("entering in to put", req.body);
  db.posttable
    .update(
      { views: req.body.views },
      {
        where: {
          id: req.body.id,
        },
      }
    )
    .then(() => {
      res.send("success");
    })
    .catch((err) => {
      console.log("err in updating  data 2 ", err);
    });
});

//updating comments based on Id
router.put("/edit/:id", (req, res) => {
  console.log("data of comments", req.body);
  db.posttable
    .update(
      { comments: req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then(() => {
      res.send("success");
    })
    .catch((err) => {
      console.log("err in updating  data  3", err);
    });
});

//exporting the module
module.exports = router;
