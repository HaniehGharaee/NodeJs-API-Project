const Admin = require("../model/Staff/Admin")
const verifyToken = require("../utils/verifyToken");

const isLogin = async (req, res, next) => {
    //get token from header
    const headerObj = req.headers;
    console.log(headerObj)
    console.log(headerObj.authorization)
    console.log(headerObj.authorization.split(" ")[1])
    const token = headerObj?.authorization?.split(" ")[1];
    // const token =
    //     headerObj &&
    //     headerObj.authorization &&
    //     headerObj.authorization.split(" ")[1]
    //verify token
    const verifiedToken = verifyToken(token)
    if (verifiedToken) {
        //find the admin
        const user = await Admin.findById(verifiedToken.id).select(
            "name email role"
        )
        //save the user into req.obj
        //req.userAuth = verifiedToken
        req.userAuth = user
        next()
        //return verifiedToken
    } else {
        const err = new Error('Token expired/invalid');
        next(err);
    }

    // const isLogin = req.userAuth;
    // console.log(req.userAuth)
    // if (isLogin) {
    //     next()
    // } else {
    //     const err = new Error("You are not login");
    //     next(err)
    // }
}

module.exports = isLogin