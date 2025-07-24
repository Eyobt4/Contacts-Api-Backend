const getContact = (req,res)=>{
    res.status(200).json({message:'Get contacts'});
};
const postContact = (req,res)=>{
    res.status(200).json({message:'post contacts'});
};
const updateContact = (req,res)=>{
    res.status(200).json({message:`put contacts ${req.params.id}`});
};
const deleteContact = (req,res)=>{
    res.status(200).json({message:`Delete contacts ${req.params.id}`});
};


module.exports= {getContact,postContact,updateContact,deleteContact};