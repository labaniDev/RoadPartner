const {Schema,model}=require("mongoose");
const newsSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    summary:{
        type:String,
        required:true,
    },
    intro:{
        type:String,
        required:true,
    },
    point1:{
        type:String,
        required:true,
    },
    point2:{
        type:String,
        required:true,
    },
    point3:{
        type:String,
        required:true,
    },
    point4:{
        type:String,
        required:true,
    },
    point5:{
        type:String,
        required:true,
    },
    content1:{
        type:String,
        required:true,
    },
    content2:{
        type:String,
        required:true,
    },
    content3:{
        type:String,
        required:true,
    },
    content4:{
        type:String,
        required:true,
    },
    content5:{
        type:String,
        required:true,
    },
    image:{
       type:String,
        required:true,
    }
},{timestamps:true}
);
const News=model('news',newsSchema)
module.exports=News;