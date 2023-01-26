const express = require("express");
const dbFunctions = require("./src/db/dbConnection");
const userRoute = require("./src/routes/userRoutes")
const errorHand = require("./src/middleware/errorHandling");

//DEFINE APP
const app = express();

//OPTIONS 
//THIS OPTIONS SHOULD BEFORE ROUTES BECAUSE THESE ARE JSON-BODY PARSER FOR HTTP-REQUEST

app.use(express.json());
app.use(express.urlencoded({extended:true}));


//DB CON
dbFunctions.dbConnection();

//ROUTES
app.use("/api/user",userRoute);

app.get('/',(req,res) => {
    res.status(200).json({'mesaj': "Main route"});
})

app.use(errorHand);


app.listen(3000,_ => {
    console.log("server start on port 3000");
})