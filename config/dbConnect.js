const mongoose = require('mongoose')
const dbConnect = async() =>{
    try{
        console.log(process.env)
        await mongoose.connect(process.env.MONGO_URL)//Have to correct url
        console.log('DB Connection Successfully')
    }catch (error){
        console.log('DB Connection failed', error.message)
    }
}

dbConnect()
