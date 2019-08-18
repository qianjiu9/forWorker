const express = require('express');
const mongoose = require('mongoose');
const DB_URL = 'mongodb://127.0.0.1:27017/'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mogo connect success');
})

const user = mongoose.model('user', new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:String,required:true}
}))
user.remove({age:21},function(err,doc){
    console.log(doc)
});
// user.create({
//     name: 'zzl',
//     age: 20
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

const app = express();

app.get('/',function(req,res){
    res.send('<h1>hello </h1>')
})

app.get('/data',function(req,res){
    user.find({age:20},function(err,doc){
        res.json(doc)
    })
})
app.listen(9090,function(){
    console.log('server is starting');
})