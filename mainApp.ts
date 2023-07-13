import express, { Application } from "express"
import cors from "cors"
import student from "./router/studentsRouter"

const mainApp = (app: Application)=>{
    app
    .use(express.json())
    .use(cors())

    .use("/hello", student)
}

export  default mainApp