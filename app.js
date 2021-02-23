const express = require('express')
const app = express()
const mongoose = require('mongoose')

const url = "mongodb+srv://root:0000@cluster0.dtau2.mongodb.net/practice?retryWrites=true&w=majority";
mongoose.Promise=global.Promise;
mongoose.connect(url,{useNewUrlParser:true},()=>{
    console.log("connected")
})

app.use(express.urlencoded({extended : true}));
app.use(express.json());
require('./routes/route')(app);


// app.get('/', (req, res) => {
//   res.send('welcom to my World')
// })

app.listen(3000, function(){
    console.log("running on port 3000.")
})

