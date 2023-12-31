import express, { Application, Request, Response } from "express"
import  mainApp  from "./mainApp"
import db from "./config/dataBase"
import dotenv from "dotenv"
dotenv.config()


const real = parseInt(process.env.DB_PORT!)
const port : number = real
const app: Application = express()

mainApp(app)

app.get("/",(req, res) => {
    return res.send({
        message: "ready for deployment"
    })
})

const server = app.listen(process.env.PORT || port, ()=>{
    console.log("");
    db()
    console.log("Hello");
    
})


process.on("uncaughtException", (error: any)=>{
    console.log("app is creashing due to uncaughtException");
    console.log(error);
    process.exit(1)
})

process.on("unhandleRejection", (reason: any)=>{
    console.log("app is creashing due to unhandleRejection");
    console.log(reason);
    server.close(()=>{
        process.exit(1)
    })
})