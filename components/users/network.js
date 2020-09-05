const express = require("express");
const response = require("../../network/response");
const crontroller = require("./controller");
const controller = require("./controller");
const router = express.Router();

router.get("/", (req, res) => {
  controller
    .getUsers()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, "Internal Error", 500, err);
    });
});

router.post("/", (req, res) => {
  controller
    .addUser(req.body.name, req.body.email)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, "Internal Error", 500, err);
    });
});

module.exports = router;
