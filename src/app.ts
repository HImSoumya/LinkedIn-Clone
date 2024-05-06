import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "./config/config";
import connectDB from "./config/dbConnection";

const app = express()
const port = config.port || 8086
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.get("/get", (req: Request, res: Response, next: NextFunction) => {
    res.json({ msg: "welcome to LinkedIn clone backend..." })
})

// DB_Connection
connectDB()


app.listen(port, () => {
    console.log(`node server stared at http://localhost:${port}`)
})

