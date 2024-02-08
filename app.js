const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const vehicle=require("./controller/carController")

const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://abhinandh:jazz9333@cluster0.ubk8s.mongodb.net/patientDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

app.use("/motor",vehicle)

app.listen(3002,()=>
{
    console.log("running")
})