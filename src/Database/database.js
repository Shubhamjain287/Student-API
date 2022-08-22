const mongoose = require('mongoose');

const ConnectDB = () => {

    const DB = process.env.DB ;

    mongoose.connect(DB,{
        useNewUrlParser : true
    }).then(()=>{
        console.log(`Database Connected Successfully`);
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = ConnectDB ;