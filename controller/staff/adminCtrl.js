const AysncHandler = require("express-async-handler");
const Admin = require("../../model/Staff/Admin");

//@desc Register admin
//@route Post /api/v1/admins/register
//@acess Private
//const registerAdminCtrl
exports.registerAdminCtrl = AysncHandler(async (req, res) => {
  // else on const instead exports
  const { name, email, password } = req.body;
  //Check if email exists
  const adminFound = await Admin.findOne({ email });
  if (adminFound) {
    //res.json("Admin Exists");
    throw new Error("Admin Exists")
  }
  //register
  const user = await Admin.create({
    name,
    email,
    password,
  });
  res.status(201).json({
    status: "success",
    data: user,
  });
});

//@desc login admin
//@route Post /api/v1/admins/register
//@acess Private
exports.loginAdminCtrl = async (req, res) => {
  const { email, password } = req.body;
  try {
    //find user
    const user = await Admin.findOne({ email });
    if (!user) {
      return res.json({ message: "Usre not found" });
    }
    if (user && (await user.verifyPassword(password))) {
      return res.json({ data: user });
    } else {
      return res.json({ message: "Invalid login crendentials" });
    }
  } catch (error) {
    res.json({
      status: "failed",
      error: error.massage,
    });
  }
};

//@desc Get all admins
//@route GET /api/v1/admins
//@acess Private
exports.getAdminsCtrl = (req, res) => {
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
};

//@desc Get single admin
//@route GET /api/v1/admins/:id
//@acess Private
exports.getAdminCtrl = (req, res) => {
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
};

//@desc  Update admin
//@route UPDATE /api/v1/admins/:id
//@acess Private
exports.updateAdminCtrl = (req, res) => {
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
};

//@desc  Delete admin
//@route DELETE /api/v1/admins/:id
//@acess Private
exports.deleteAdminCtrl = (req, res) => {
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
};

//@desc  admin suspend a teacher
//@route PUT /api/v1/admins/suspend/teacher/:id
//@acess Private
exports.adminSuspendTeacherCtrl = (req, res) => {
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
};

//@desc  admin unsuspend a teacher
//@route PUT /api/v1/admins/unsuspend/teacher/:id
//@acess Private
exports.adminUnSUspendTeacherCtrl = (req, res) => {
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
};

//@desc  admin withdraw a teacher
//@route PUT /api/v1/admins/withdraw/teacher/:id
//@acess Private
exports.adminWithdrawTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "admin withdraw teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.massage,
    });
  }
};

//@desc  admin unwithdraw a teacher
//@route PUT /api/v1/admins/unwithdraw/teacher/:id
//@acess Private
exports.adminUnWithdrawTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "admin unwithdraw teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.massage,
    });
  }
};

//@desc  admin publish exam result
//@route PUT /api/v1/admins/publish/exam/:id
//@acess Private
exports.adminPublishResultCtrl = (req, res) => {
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
};

//@desc  admin unpublish exam result
//@route PUT /api/v1/admins/unpublish/exam/:id
//@acess Private
exports.adminUnPublishResultCtrl = (req, res) => {
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
};

//   module.exports = {
//     registerAdminCtrl,
//   }
