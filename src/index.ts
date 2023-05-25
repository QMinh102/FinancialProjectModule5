import express from 'express';
import bodyParser from "body-parser";
import router from "./routers";
// import {AppDataSource} from "./src/data-source";
import cors from 'cors';

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('', router)
app.listen(3001, () => {
    console.log('Server is running')
})