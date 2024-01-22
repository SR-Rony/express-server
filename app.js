let express =require("express")
let bodyParser = require('body-parser')
let app = express()
let usersRouting = require('./routes/users.route')

app.use("/users",usersRouting)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const meddle = (req,res,next)=>{
    console.log('i am meddle wear function');
    req.time = Date(Date.now())
    next()
}


app.get("/",meddle,(req,res)=>{
    console.log('current time '+ req.time);
    res.sendFile(__dirname + "/pages/home.html")
    // res.end()
})
app.get("/register",(req,res)=>{
    res.statusCode = 200
    res.sendFile(__dirname + "/pages/register.html")
    // res.end()
})

app.post("/register",(req,res)=>{
    let fullName = req.body.fullName
    let email = req.body.email

    res.send(`<h1>user Fullname is : ${fullName} ane user email : ${email}</h1>`)
    // res.end()
})



app.get("/login",(req,res)=>{
    res.statusCode = 200
    res.sendFile(__dirname + "/pages/login.html")
    // res.end()
})

app.get("/product/:id([0-3]+)",(req,res)=>{
    res.statusCode = 200
    res.send(`<h1>ID : ${req.params.id}</h1>`)
    // res.end()
})

app.get("*",(req,res)=>{
    res.send("<h1>page is not found and 404 !!!</h1>")
})

module.exports=app