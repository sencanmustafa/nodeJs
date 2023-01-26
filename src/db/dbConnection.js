const mong = require("mongoose");
const { json } = require("node:stream/consumers");

const UserModel = require("../models/userModel");


mong.set('strictQuery',false);



async function dbConnection()
{
    try 
    {
        await mong.connect("mongodb://0.0.0.0:27017/restfulAPi", { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("connected to db");   
    } catch (error) 
    {
        console.log("error occurred while connecting db error => " + error);   
    }
    
}

async function checkExistUser(user){
    try {
        const existUser = await UserModel.findOne({userName:user.userName})
        return !existUser;
    } catch (error) {
        console.log("error occurred while connecting db error => " + error);
        return json({"status" :404,"result" : `error while checkExistUserFunction error => ${error}` })   
    }
}


module.exports = {dbConnection}


