const mong = require("mongoose");

const joi = require("@hapi/joi");
const Joi = require("@hapi/joi");

const Schema = mong.Schema;

const userSchema = new Schema({
    name : {
        type : String,
        required :true,
        lowercase:true,
        trim : true,
        minLength : 3,
        maxLength : 50
    },
    userName : {
        type: String,
        required : true,
        lowercase:true,
        unique :true,
        trim:true
    },
    lastName : {
        type: String,
        required : true,
        lowercase:true,
        unique :true,
        trim:true
    },
    email : {
        type: String,
        lowercase:true,
        required : true,
        unique :true,
        trim:true
    },
    password : {
        type: String,
        required : true,
        trim:true
    }
},{collection : 'Users',timestamps:true});

const UserModel = mong.model('UserModel',userSchema);


module.exports = UserModel;