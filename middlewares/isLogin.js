const isLogin = (req, res, next) => {
    const isLogin = req.userAuth;
    console.log(req.userAuth)
    if (isLogin) {
        next()
    } else {
        const err = new Error("You are not login");
        next(err)
    }
}

module.exports = isLogin