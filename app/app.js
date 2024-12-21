const express = require('express')
const morgan = require('morgan')

const app = express()

//============Middleware===========
app.use(morgan("dev"))

//Routes 

//admin register
app.post('/api/v1/admins/register', (req, res) =>{
    try{
        res.status(201).json({
            status: 'success',
            data: 'Admin has been registered'
        })
    }catch (error){
        res.json({
            status: "failed",
            error: error.massage
        })
    }
})

//admin login
app.post('/api/v1/admins/login', (req, res) =>{
    try{
        res.status(201).json({
            status: 'success',
            data: 'Admin has been login'
        })
    }catch (error){
        res.json({
            status: "failed",
            error: error.massage
        })
    }
})

//Get all admins
app.get('/api/v1/admins', (req, res) =>{
    try{
        res.status(201).json({
            status: 'success',
            data: 'All admins'
        })
    }catch (error){
        res.json({
            status: "failed",
            error: error.massage
        })
    }
})

//Get single admins
app.get('/api/v1/admins/:id', (req, res) =>{
    try{
        res.status(201).json({
            status: 'success',
            data: 'single admins'
        })
    }catch (error){
        res.json({
            status: "failed",
            error: error.massage
        })
    }
})

//Update admin
app.put('/api/v1/admins/:id', (req, res) =>{
    try{
        res.status(201).json({
            status: 'success',
            data: 'update admins'
        })
    }catch (error){
        res.json({
            status: "failed",
            error: error.massage
        })
    }
})

//Delete admin
app.delete('/api/v1/admins/:id', (req, res) =>{
    try{
        res.status(201).json({
            status: 'success',
            data: 'delete admins'
        })
    }catch (error){
        res.json({
            status: "failed",
            error: error.massage
        })
    }
})

//admin suspending teacher
app.put('/api/v1/admins/suspending/teacher/:id', (req, res) =>{
    try{
        res.status(201).json({
            status: 'success',
            data: 'admins suspending teacher'
        })
    }catch (error){
        res.json({
            status: "failed",
            error: error.massage
        })
    }
})

//admin Unsuspending teacher
app.put('/api/v1/admins/unsuspending/teacher/:id', (req, res) =>{
    try{
        res.status(201).json({
            status: 'success',
            data: 'admins Unsuspending teacher'
        })
    }catch (error){
        res.json({
            status: "failed",
            error: error.massage
        })
    }
})

//admin withdrawing teacher
app.put('/api/v1/admins/withdraw/teacher/:id', (req, res) =>{
    try{
        res.status(201).json({
            status: 'success',
            data: 'admins withdraw teacher'
        })
    }catch (error){
        res.json({
            status: "failed",
            error: error.massage
        })
    }
})

//admin Unwithdrawing teacher
app.put('/api/v1/admins/unwithdraw/teacher/:id', (req, res) =>{
    try{
        res.status(201).json({
            status: 'success',
            data: 'admins unwithdraw teacher'
        })
    }catch (error){
        res.json({
            status: "failed",
            error: error.massage
        })
    }
})

//admin publish exam results teacher
app.put('/api/v1/admins/publish/exam/:id', (req, res) =>{
    try{
        res.status(201).json({
            status: 'success',
            data: 'admins publish exam'
        })
    }catch (error){
        res.json({
            status: "failed",
            error: error.massage
        })
    }
})

//admin Unpublish exam results teacher
app.put('/api/v1/admins/unpublish/exam/:id', (req, res) =>{
    try{
        res.status(201).json({
            status: 'success',
            data: 'admins unpublish exam'
        })
    }catch (error){
        res.json({
            status: "failed",
            error: error.massage
        })
    }
})
module.exports = app;
