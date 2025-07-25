//add async handler
const asyncHandler = require("express-async-handler");
const contact = require("../models/contactModel")

const getContact =asyncHandler(async (req,res)=>{
    const contacts = await contact.find();
    res.status(200).json(contacts);
});
const postContact =asyncHandler(async (req,res)=>{
    res.status(200).json({message:'post contacts'});
});
const creatContact =asyncHandler(async (req,res)=>{
    const {name,email,phone} =req.body;
    if (!name||!email||!phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contacts = await contact.create({
        name,
        email,
        phone,
    });  
    res.status(200).json(contacts);
});
const updateContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`put contacts ${req.params.id}`});
});
const deleteContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Delete contacts ${req.params.id}`});
});


module.exports= {getContact,creatContact,postContact,updateContact,deleteContact};