const express = require('express');
const app = express();
const port = 8000;
const path = require('path')
require("dotenv").config();
require('./mail')

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.post('/email', (req, res) => {
    console.log('data:', req.body)
    res.json({message: "message recieved!!!"})
})

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname,'views', "index.html"))
})
app.listen(port, () => {
    console.log(`server is listning at port ${port}`)
})