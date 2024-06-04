const {Schema,model}=require("mongoose");
const serviceBlogSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    image:{
       type:String,
        required:true,
    }
},{timestamps:true}
);
const ServiceBlog=model('serviceBlog',serviceBlogSchema)
module.exports=ServiceBlog;