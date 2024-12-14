const mongoose = require('mongoose')
const dbConnect = async() =>{
    try{
        await mongoose.connect('url')//Have to correct url
        console.log('DB Connection Successfully')

    }catch (error){
        console.log('DB Connection failed', error.message)
    }
}

dbConnect()
