const express = require("express");
const {
  registerAdminCtrl,
  loginAdminCtrl,
  getAdminProfileCtrl,
  getAdminsCtrl,
  updateAdminCtrl,
  deleteAdminCtrl,
  adminSuspendTeacherCtrl,
  adminUnSUspendTeacherCtrl,
  adminWithdrawTeacherCtrl,
  adminUnWithdrawTeacherCtrl,
  adminPublishResultCtrl,
  adminUnPublishResultCtrl
} = require("../../controller/staff/adminCtrl");
const isAdmin = require("../../middlewares/isAdmin")
const isLogin = require("../../middlewares/isLogin")

const adminRouter = express.Router();

//register
adminRouter.post("/register", registerAdminCtrl);

//login
adminRouter.post("/login", loginAdminCtrl);

//get all
adminRouter.get("/", isLogin, getAdminsCtrl);

//get single admins
//adminRouter.get("/:id", isLogin, getAdminProfileCtrl);
adminRouter.get("/profile", isLogin, isAdmin, getAdminProfileCtrl);

//update admin
//adminRouter.put("/:id", updateAdminCtrl);
adminRouter.put("/", isLogin, isAdmin, updateAdminCtrl);

//Delete admin
adminRouter.delete("/:id", deleteAdminCtrl);

//admin suspending teacher
adminRouter.put("/suspending/teacher/:id", adminSuspendTeacherCtrl);

//admin Unsuspending teacher
adminRouter.put("/unsuspending/teacher/:id", adminUnSUspendTeacherCtrl);

//admin withdrawing teacher
adminRouter.put("/withdraw/teacher/:id", adminWithdrawTeacherCtrl);

//admin Unwithdrawing teacher
adminRouter.put("/unwithdraw/teacher/:id", adminUnWithdrawTeacherCtrl);

//admin publish exam results teacher
adminRouter.put("/publish/exam/:id", adminPublishResultCtrl);

//admin Unpublish exam results teacher
adminRouter.put("/unpublish/exam/:id", adminUnPublishResultCtrl);

module.exports = adminRouter;
