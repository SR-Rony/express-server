let express =require("express")
let app = express()
let usersRouting = require('./routes/users.route')

app.use("/api/users",usersRouting)

app.get("/",(req,res)=>{
    res.send("<h1>iam get request and home router</h1>")
})

app.get("*",(req,res)=>{
    res.send("<h1>page is not found and 404 !!!</h1>")
})

module.exports=app