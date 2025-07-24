const express = require("express");
const router = express.Router();


router.route("/").get((req,res)=>{
    res.status(200).json({message:'Get contacts'});
});
router.route("/").post((req,res)=>{
    res.status(200).json({message:'Post contacts'});
});
router.route("/:id").put((req,res)=>{
    res.status(200).json({message:`Put contacts ${req.params.id}`});
});
router.route("/:id").delete((req,res)=>{
    res.status(200).json({message:`Delete contacts ${req.params.id}`});
});

module.exports = router;