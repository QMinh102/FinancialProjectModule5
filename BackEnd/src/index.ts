import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import router from "./routers";
import cors from "cors";
import {connectDB} from "./data-source";

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser(process.env.USER_CODE_SECRET))

connectDB().then(() => {
    console.log('Connect Database Succeeded')
})

app.use(cors());

app.use('', router)
app.listen(3001, () => {
    console.log('Server is running')
})