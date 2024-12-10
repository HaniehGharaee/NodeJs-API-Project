const express = require('express')
const morgan = require('morgan')

const app = express()

//============Middleware===========
app.use(morgan("dev"))

module.exports = app;
