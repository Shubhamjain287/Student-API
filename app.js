const express = require('express');
const app = express();
const router = require('./src/Routers/studentRoutes');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

const ConnectDB = require('./src/Database/database');

const PORT = process.env.PORT;
ConnectDB();

const corsOptions =  {
    origin:'*'
}

app.use(express.json());
app.use(router);
app.use(cors(corsOptions));

app.listen(PORT,()=>{
    console.log(`Connection Live on ther Server Port ${PORT}`);
});