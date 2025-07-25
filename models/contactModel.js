const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"please add contact name"]
    },
    email:{
        type:String,
        required:[true,"please add contacts email"]
    },
    phone:{
        type:Number,
        required:[true,"please add contacts phone number"]
    },
},
{
    timeStamps:true,

});

module.exports = mongoose.model("Contact",contactSchema);