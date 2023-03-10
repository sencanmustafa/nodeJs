const userRoute = require("express").Router()

const UserModel = require("../models/userModel");

const bcrypt = require("bcrypt");

const errorHand = require("../middleware/errorHandling");

// return all users
userRoute.get("/users",async (req , res, next) => 
{
    try 
    {
        const users = await UserModel.find();
        return res.status(200).json({
            "users" : users
            })
        
    } catch (error) 
    {
        next(error)
        return res.status(404).json({"statusCode" : 404 , "result" : `error occurred error => ${error} `}) 
    }
    
});


// new User
userRoute.post("/newUser",async (req,res) => {
    try {
        const newUser = new UserModel(req.body);
        newUser._doc.password = await bcrypt.hash(newUser._doc.password,10);
        const result = await newUser.save();
        return res.json(result);
    } catch (error) {
        console.log("error occurred while adding user on db error => " + error);
        return res.status(404).json({"statusCode" : 404 , "result" : `error occurred while adding user on db error => ${error} `})
    }
});

//delete  User
userRoute.delete("/deleteUser/:id", async (req,res) => {
    try 
    {
        const result = await UserModel.findByIdAndDelete({_id:req.params.id})    
        if(result){
            return res.status(200).json({"statusCode" : 200,"status" : `success` , "result" : `${result}`});
        }
        else{
            return res.status(200).json({"statusCode" : 200,"result" : `user not found `});
        }
        
    } catch (error) {
        console.log("error occurred while deleting user on db error => " + error);
        return res.status(404).json({"statusCode" : 404 , "result" : `error occurred while deleting user on db error => ${error} `})
    }
})


//Update User
userRoute.patch("/updateUser/:id",async (req,res) => {
    try {
        const resultUpdateUser = await UserModel.findByIdAndUpdate({_id:req.params.id},req.body,{new : true})
        if(resultUpdateUser){
            return res.status(200).json({"statusCode" : 200,"status" : `success` , "result" : `${resultUpdateUser}`});
        }
        else{
            return res.status(200).json({"statusCode" : 200,"result" : `user not found `});
        }
    } catch (error) {
        
        console.log("error occurred while deleting user on db error => " + error);
        return res.status(404).json({"statusCode" : 404 , "result" : `error occurred while deleting user on db error => ${error} `})
    }
})



module.exports = userRoute;