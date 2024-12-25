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
adminRouter.put("/", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "admins Unsuspending teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.massage,
    });
  }
});

//admin withdrawing teacher
adminRouter.put("/", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "admins unwithdraw teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.massage,
    });
  }
});

//admin Unwithdrawing teacher
adminRouter.put("/", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "admins unwithdraw teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.massage,
    });
  }
});

//admin publish exam results teacher
adminRouter.put("/", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "admins publish exam",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.massage,
    });
  }
});

//admin Unpublish exam results teacher
adminRouter.put("/", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "admins unpublish exam",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.massage,
    });
  }
});

module.exports = adminRouter;
