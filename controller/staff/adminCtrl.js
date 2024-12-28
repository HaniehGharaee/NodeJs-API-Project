
//@desc Register admin
//@route Post /api/admins/register
//@acess Private 
exports.registerAdminCtrl = (req, res) => {     // else on const instead exports
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
  };

//   module.exports = {
//     registerAdminCtrl,
//   }