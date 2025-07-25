const express = require("express");
const dotenv = require("dotenv").config();
const contactSchema = require("./models/contactModel")
const connectDb = require("./config/dbconnection")

const app = express();

const port = process.env.PORT;
connectDb();
app.use("/api/contacts",require("./routes/contactsRoute"));
app.use(contactSchema)


app.listen(port,()=>{
    console.log(`server listning at ${port}`);
    
});
