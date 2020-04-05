var express = require("express");
var app = express();

const sqlite3 = require('sqlite3').verbose();
var tsjDb = new sqlite3.Database('C:/Users/rama4/Documents/myProjects/myDatabases/TSJdb.db',(err)=>{
    if(err){
        console.log("error in opening database");
    }
    else{
        console.log("Database opened succsessfully");
    }
});

var sql = "select * from TSJ_Sessions";
tsjDb.all(sql,[],(err,rows)=>{
    if(err){
        throw err;
    }
    console.log(rows);
    // rows.forEach((row)=>{
    //     console.log(row);
    // });
});
// app.listen(3000,function(){
//     console.log("server islisteng");
// })