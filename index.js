const express= require('express');
require('./db/mongo');
const User=require('./models/user')
const cors= require('cors');
const bodyparser=require('body-parser')
const app = express();
const port = 4000;


// middleware
app.use(cors());
app.use(bodyparser.json())

app.post('/',async (req,res)=>{

    let user= new User();
    user.name=req.body.name; 
    user.email=req.body.email;
    user.password=req.body.password;
    const doc =await user.save()

    console.log(doc);
    res.json(doc);
})

app.listen(port,()=>{
    console.log(`running on  ${port}`);
})