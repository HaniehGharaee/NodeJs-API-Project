const express = require("express");

const adminRouter = express.Router();

adminRouter.post("/", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin has been registered",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.massage,
    });
  }
});

//login
adminRouter.post("/", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin has been login",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.massage,
    });
  }
});

//get all
adminRouter.get("/", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "All admins",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.massage,
    });
  }
});

//get single admins
adminRouter.get("/", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "single admins",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.massage,
    });
  }
});

//update admin
adminRouter.put("/", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "single admins",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.massage,
    });
  }
});

//Delete admin
adminRouter.delete("/", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "delete admins",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.massage,
    });
  }
});

//admin suspending teacher
adminRouter.put("/", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "admins suspending teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.massage,
    });
  }
});

//admin Unsuspending teacher

//admin withdrawing teacher

//admin Unwithdrawing teacher

//admin publish exam results teacher

//admin Unpublish exam results teacher

module.exports = adminRouter;
