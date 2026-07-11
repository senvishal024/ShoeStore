const express=require("express");
const cors=require("cors");
const router  = require("./Routes/userRoutes");
const dbconnect=require("./Config/databaseConnect");
const isLoggedIn = require("./Middleware/isLoggedIn");
const app =express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const PORT=process.env.PORT;
dbconnect();
app.use("/shoeapp", router);
app.get("/",isLoggedIn,(req,res)=>{
    res.send("Shoe Page");
})

app.listen(PORT ,()=>{
    console.log(`server is running : localhost:${PORT} `)
});