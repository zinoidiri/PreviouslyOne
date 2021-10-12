const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const port = 5000;
const cors = require('cors');
const md5 = require('md5');
const axios = require('axios');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors());


app.post("/api/login",(req, res) => {
    axios.post("https://api.betaseries.com/members/auth", {
        login : req.body.login,
        password: md5(req.body.password),
        client_id: "de84e63d0432"
    })
    .then(function(responce){
        console.log(responce)
        res.json(responce.data)
    })
    .catch(function(responce){
        console.log(responce)
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })