const express = require("express");
const {registerAdminCtrl} = require("../../controller/staff/adminCtrl")
const adminRouter = express.Router();

//register
adminRouter.post("/register", registerAdminCtrl);

//login
adminRouter.post("/login", (req, res) => {
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
adminRouter.get("/:id", (req, res) => {
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
adminRouter.put("/:id", (req, res) => {
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
adminRouter.delete("/:id", (req, res) => {
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
adminRouter.put("/suspending/teacher/:id", (req, res) => {
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
adminRouter.put("/unsuspending/teacher/:id", (req, res) => {
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
adminRouter.put("/withdraw/teacher/:id", (req, res) => {
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
adminRouter.put("/unwithdraw/teacher/:id", (req, res) => {
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
adminRouter.put("/publish/exam/:id", (req, res) => {
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
adminRouter.put("/unpublish/exam/:id", (req, res) => {
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
