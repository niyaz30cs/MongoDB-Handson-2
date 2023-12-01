const express=require("express");
const { employeeConnection } = require("./config/db");
const employeeRouter = require("./routerCompo/userRouter");

const app=express();

app.use("/user", employeeRouter);


app.listen(1300,async()=>{
    try
    {
        await employeeConnection();
        console.log("Server Run on Port No-1300");
    }
    catch(err)
    {
        console.log(`Some Error on port No 1300 ${err}`);
    }
})