const mongoose= require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/users1',
{
useNewUrlParser:true,
useUnifiedTopology:true
}).then(()=>{
    console.log('connection is  successfull');
}).catch((error)=>{
    console.log('somthing is  wrong',error);
})