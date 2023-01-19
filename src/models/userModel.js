const mong = require("mongoose");
const Schema = mong.Schema;

const userSchema = new Schema({
    name : {
        type : String,
        required :true,
        lowercase:true,
        trim : true,
        minlenght : 3,
        maxlenght : 50
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