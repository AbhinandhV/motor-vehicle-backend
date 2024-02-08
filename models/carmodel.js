const mongoose=require("mongoose")

const motorSchema=new mongoose.Schema(
    {
        Registration:String,
        Model:String,
        Owner:String
    }
)

module.exports=mongoose.model("car",motorSchema)