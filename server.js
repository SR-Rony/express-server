require("dotenv").config()
let app = require("./app")
let PORT = process.env.PORT || 300

app.listen(PORT,()=>{
    console.log(`my server is runing at http://localhost:${PORT}`);
})