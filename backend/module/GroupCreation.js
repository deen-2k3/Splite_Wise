import mongoose  from "mongoose";
import User from "./user.js";

const groupSchema=new mongoose.Schema({
    groupName:{
        type:String,
        require:true
    },
    CreatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true

    },
    members:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",

    }],
    CreatedAt:{
        type:Date,
        default:Date.now
    }
});
export default mongoose.model("Group",groupSchema);