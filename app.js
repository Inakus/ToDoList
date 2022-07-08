const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));

let lists = [];

app.get("/", function(req, res){
    res.render("index", {list: lists});
});

app.post("/", function(req, res){
    const textNew = req.body.newItem;
    lists.push(textNew);
    res.redirect("/");
});

app.listen(3000,function(){
    console.log("Server is runing on port 3000");
});