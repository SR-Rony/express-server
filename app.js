let express =require("express")
let bodyParser = require('body-parser')
let app = express()
let usersRouting = require('./routes/users.route')

app.use("/api/users",usersRouting)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/",(req,res)=>{
    let body = req.body.name
    res.send(`this is ${body}`)
})
app.get("/",(req,res)=>{
    res.statusCode = 200
    res.sendFile(__dirname + "/pages/home.html")
    // res.end()
})
app.get("/login",(req,res)=>{
    res.statusCode = 200
    res.sendFile(__dirname + "/pages/login.html")
    // res.end()
})

app.get("*",(req,res)=>{
    res.send("<h1>page is not found and 404 !!!</h1>")
})

module.exports=app