//add async handler CRUD contacts here
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

const getContact =asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contacts not found");
    }
    res.status(200).json(contact);
});

const creatContact =asyncHandler(async (req,res)=>{
    const {name,email,phone} =req.body;
    if (!name||!email||!phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contacts = await Contact.create({
        name,
        email,
        phone,
    });  
    res.status(200).json(contacts);
});

const updateContact = asyncHandler(async (req,res)=>{
    const contactInfo = Contact.findById(req.params.id);
    if(!contactInfo){
        res.status(404);
        throw new Error("contact not found");
    }
    const update = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(update);
});


const deleteContact = asyncHandler(async(req,res)=>{
    const contact = Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("contact doesn't exist");
    }
    // const deleting = await Contact.findByIdAndDelete(req.params.id);
    const deleting = await Contact.deleteOne();
    res.status(200).json(deleting);
});


module.exports= {getContact,creatContact,updateContact,deleteContact};


