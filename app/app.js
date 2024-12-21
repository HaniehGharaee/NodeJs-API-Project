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

module.exports = app;
