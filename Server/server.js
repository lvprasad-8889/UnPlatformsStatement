const express = require('express');
const app = express();
const db = require("./models");
const port = process.env.PORT || 3001
const cors =require('cors')

app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const userApi = require('./userApi');
app.use("/server",userApi)

db.sequelize.sync()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Listening on http://localhost:${port}`);
    })
})
.catch(err=>console.log("Error in database connection :",err))