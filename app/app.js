const express = require("express");
const morgan = require("morgan");
const adminRouter = require("../routes/staff/adminRouter");
adminRouter;
const app = express();

//============Middleware===========
app.use(morgan("dev"));

//Routes

//admin register
app.use("/api/v1/admins/register", adminRouter);
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
app.get("/api/v1/admins/:id", adminRouter);

//Update admin
app.put("/api/v1/admins/:id", adminRouter);

//Delete admin
app.delete("/api/v1/admins/:id", adminRouter);

//admin suspending teacher
app.put("/api/v1/admins/suspending/teacher/:id", adminRouter);

//admin Unsuspending teacher
app.put("/api/v1/admins/unsuspending/teacher/:id", adminRouter);

//admin withdrawing teacher
app.put("/api/v1/admins/withdraw/teacher/:id", adminRouter);

//admin Unwithdrawing teacher
app.put("/api/v1/admins/unwithdraw/teacher/:id", adminRouter);

//admin publish exam results teacher
app.put("/api/v1/admins/publish/exam/:id", adminRouter);

//admin Unpublish exam results teacher
app.put("/api/v1/admins/unpublish/exam/:id", adminRouter);
module.exports = app;
