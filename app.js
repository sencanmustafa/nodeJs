const express = require("express");
const dbFunctions = require("./src/db/dbConnection");
const userRoute = require("./src/routes/userRoutes")


//DEFINE APP
const app = express();

//OPTIONS 
//THIS OPTIONS SHOUD BEFORE ROUTES BECAUSE THEESE ARE JSON-BODY PARSER FOR HTTP-REQUEST
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//DB CON
dbFunctions.dbConnection();

//ROUTES
app.use("/api/user",userRoute);

app.get('/',(req,res) => {
    res.status(200).json({'mesaj': "Main route"});
})








app.listen(3000,_ => {
    console.log("server start on port 3000");
})