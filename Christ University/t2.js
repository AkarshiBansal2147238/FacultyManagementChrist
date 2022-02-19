const http = require('http')
const{load} = require('./t1.js');
const express = require('express')
const app = express();
const cors = require('cors');
app.use (cors({
    origin:"*",
}));
const port = 5200;
app.listen(port,()=>console.log("server is running"));
app.get('/timetable',(req,res)=>
{
    res.send(load())
});