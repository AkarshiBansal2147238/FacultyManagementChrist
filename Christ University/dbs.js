const mysql = require('mysql2');
const express = require('express');
var app = express();
const parser = require('body-parser');
app.use(parser.json());
var connection = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'akarshibansal8600',
        database:'faculty_management'
    }
);
connection.connect((err)=>
{
    if(!err)
    console.log('DB Connected.....');
    else
    console.log('Error');
}
)
app.listen(5700,()=>console.log('Server Started'));
app.get('/subjects',(req,res)=>
{
    connection.query('SELECT * FROM subject',(err,rows,fields)=>
    {
        if (!err)
        res.send(rows);
        else
        console.log('Error');
    } )
}
)
app.get('/subjects/:id',(req,res)=>
{
    connection.query('SELECT * FROM subject WHERE S_id=?',[req.params.id],(err,rows,fields)=>
    {
        if (!err)
        res.send(rows);
        else
        console.log('Error');
    } )
}
)
app.get('/add',(req,res)=>
{
    var post={S_id:11,S_Name:'Linux',No_of_teaching_hrs:30,program:3};
    var sql ='INSERT INTO subject SET ?';
    var query = connection.query(sql,post,(err,result)=>
    {
        if(err) throw console.error();
        res.send("Inserted Rows.....")
    });
});
app.get('/update/:id',(req,res)=>
{
    var name = 'WSD'
    var sql =`UPDATE subject SET S_Name = '${name}' WHERE S_id = ${req.params.id}`;
    var query = connection.query(sql,(err,result)=>
    {
        if(err) throw err;
        res.send("Updated Rows.....")
    });
});
app.get('/delete/:id',(req,res)=>
{
    var sql =`DELETE from subject WHERE S_id = ${req.params.id}`;
    var query = connection.query(sql,(err,result)=>
    {
        if(err) throw err;
        res.send("Deleted Rows.....")
    });
});