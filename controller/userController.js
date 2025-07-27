const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// post signup api/user
const signupUser = asyncHandler(async (req,res)=>{
    const {username,email,password} = req.body;
    if(!username||!email||!password){
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    const userAvailable = await User.findOne({email})
    if(userAvailable) {
        res.status(400);
        throw new Error("User already available!")
    }
    //hash password
    const hashedpassword = await bcrypt.hash(password,10)
    console.log(hashedpassword);
    const user = await User.create({
        username,
        email,
        password:hashedpassword,
    });
    console.log(user);
    if(user){
        res.status(201).json({_id:user.id,email:user.email});
    }
    else{
        res.status(400);
        throw new Error("User not available!")  
    }
});

// post login api/user
const loginUser = asyncHandler(async (req,res)=>{
    const {email,password} = req.body;
    if(!email||!password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(password,user.password))){npm 
        const accessToken = jwt.sign({
            user: {
                username:user.username,
                email:user.email,s
                id:user.id,
            },
        },"process.env.ACCESS_TOKEN_SECRET",
        {expiresIn:"5m"}
        );
        res.status(200).json({accessToken});
        console.log(accessToken);
    }else{
        res.status(400);
        throw new Error("Email or password error!");
    };
});

// post current api/user
const currentUser = asyncHandler(async (req,res)=>{
    res.status(200).json({message:"current user"});
});

module.exports = {signupUser,loginUser,currentUser};