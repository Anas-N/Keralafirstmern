const express =  require('express');
const router = express.Router();





require('../db/conn');
const User = require("../model/userSchema");

// router.get('/', (req, res) => {
//     res.send('Hello World ggg');
// });

// async await

router.post('/Register', async (req,  res) =>{

    const {name, lastname, email, phone, classes, gender, dob, address} =  req.body;
    
    if   (!name || !lastname || !email|| !phone|| !classes || !gender || !dob || !address){
                return res.status(422).json({error:"please filled the field properly"});
            }

            try {

        const userExist =   await User.findOne({email: email})
        if(userExist){
            return res.status(422).json({error:"Email already exist"});
        }
    
        const user = new User({name, lastname, email, phone, classes, gender, dob, address});

        await user.save();
         
        res.status(201).json({message:"user registerd successfully"});
         
        
        
            } 
            catch (err) {
                console.log(err);
            }
            
});



module.exports = router