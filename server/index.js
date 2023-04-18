const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "8Jed18gerh@",
    database:"test"
  });
  
  db.connect((err)=>{
    if(err){
        console.log(`Database is not connected Error: ${err}`);
    }else{
        console.log('Database is Connected');
    }
  });
  app.get("/",(req,res)=>{
    res.json("hello this is a backed")
  })
  app.post("/login",(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const q = 
    
    db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email,password],
        (err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
  })
  app.post("/signup",(req,res)=>{
    const q = "INSERT INTO users (`name`,`email`,`password`) VALUES (?)"
    const values = [
    req.body.name,
    req.body.email,
    req.body.password
    ]
    db.query(q,[values],(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
  })

  app.listen(8001,()=>{
    console.log('Server is open at localhost:8001');
  })