let express = require("express")
let route = express.Router()

route.get("/about",(req,res)=>{
    res.send("<h1>iam get request and about router</h1>")
})
route.get("/login",(req,res)=>{
    res.send("<h1>iam get request and login router<h1/>")
})
route.get("/contact",(req,res)=>{
    res.send("<h1>iam get request and contact router</h1>")
})

module.exports = route