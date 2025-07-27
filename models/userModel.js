const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type:String,
        required:[true,"Enter username"]
    },
    email: {
        type:String,
        required:[true,"Enter user email"],
        unique:[true,"Email already exist"]
    },
    password: {
        type:String,
        required:[true,"Enter user password"]
    }
},
{
    timestamp:true,
});

module.exports = mongoose.model("user",userSchema);