const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const { mongoose } = require('mongoose')
const { Schema } = mongoose;
const dotenv = require('dotenv')
dotenv.config()


const usersSchema= new Schema({
    img:{type:String,required:true},
    title:{type:String,required:true},
    description:{type:String,required:true},
    profilImg:{type:String,required:true},
    name:{type:String,required:true},
    price:{type:Number,required:true},
})
const Users = mongoose.model('users',usersSchema);

app.use(cors())
app.use(bodyParser.json())



/// get all data
app.get('/users', (req, res) => {
    Users.find({},(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(500).json({message:err})
        }
    })
})


// get by id

app.get('/users/:_id',(req,res)=>{
    const{_id}=req.params
    Users.findById(_id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }else{
                res.status(404).json({message:'not found.'})
            }
        }else{
            res.status(500).json({message:err})
        }
    })
})


//// delete

app.delete('users/:_id',(req,res)=>{
    const{_id}=req.params
    if(!err){
        Users.findByIdAndDelete(_id,(err,doc)=>{
            if(!err){
                res.send("success...")
            }else{
                res.status(500).json({message:err})
            }
        })
    }
})


app.post('/users',(req,res)=>{
    const user = new Users({
        img:req.body.img,
        title:req.body.title,
        description:req.body.description,
        profilImg:req.body.iprofilImgmg,
        name:req.body.name,
        price:req.body.price,
    })
    user.save()
    res.status('success...')
})



PORT = process.env
DB = process.env.DB_URL.replace('<password>',process.env.PASSWORD)

mongoose.connect(DB,(err)=>{
    if(!err){
        console.log('DB connected')
        app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
    }
})


