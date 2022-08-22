const express = require('express');
const app = express();
const router = require('./src/Routers/studentRoutes');

const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

const ConnectDB = require('./src/Database/database');

const PORT = process.env.PORT;
ConnectDB();

app.use(express.json());
app.use(router);

app.listen(PORT,()=>{
    console.log(`Connection Live on ther Server Port ${PORT}`);
});