const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    lastname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true,
        
    },
    phone:{
        type:Number,
        required:true
    },
    classes:{
        type: String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dob:{
        type: Date,
        required:true,
       
    },
    address:{
        type: String,
        required:true,
        
    }

})

const User = mongoose.model('USER',userSchema);

module.exports = User;