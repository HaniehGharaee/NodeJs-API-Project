const express = require("express");
const globalErrHandler = require("../middlewares/globalErrHandler");
const morgan = require("morgan");
const adminRouter = require("../routes/staff/adminRouter");
adminRouter;
const app = express();

//============Middleware===========
app.use(morgan("dev"));
app.use(express.json()); //pass incoming json data

// app.use((req, res, next) => {
//   console.log("Middleware", req);
//   console.log(`${req.method} ${req.originalUrl}`);
//   next();
// });
//Routes
//admin register
app.use("/api/v1/admin", adminRouter);

//Error middlewares
app.use(globalErrHandler);

let user = {
  name: "Hanieh Gharaee",
  isAdmin: false,
  isLogin: true, //test with postman to false
};

const isLogin = (req, res, next) => {
  if (user.isLogin) {
    next();
  } else {
    res.status(401).json({
      msg: "Unauthorized",
    });
  }
};

const isAdmin = (req, res, next) => {
  if (user.isAdmin) {
    next();
  } else {
    res.status(401).json({
      msg: "Unauthorized, you are not admin",
    });
  }
};

app.use(isLogin, isAdmin);
//Routes
//admin register
app.use("/api/v1/admins", adminRouter);

// app.use('/me', (req, res)=> {
//     res.json({
//         msg: "I will be called"
//     });
// })

//admin login
app.post("/api/v1/admins", adminRouter);

//Get all admins
app.get("/api/v1/admins", adminRouter);

//Get single admins
app.get("/api/v1/admins", adminRouter);

//Update admin
app.put("/api/v1/admins", adminRouter);

//Delete admin
app.delete("/api/v1/admins", adminRouter);

//admin suspending teacher
app.put("/api/v1/admins", adminRouter);

//admin Unsuspending teacher
app.put("/api/v1/admins", adminRouter);

//admin withdrawing teacher
app.put("/api/v1/admins", adminRouter);

//admin Unwithdrawing teacher
app.put("/api/v1/admins", adminRouter);

//admin publish exam results teacher
app.put("/api/v1/admins", adminRouter);

//admin Unpublish exam results teacher
app.put("/api/v1/admins", adminRouter);
module.exports = app;
