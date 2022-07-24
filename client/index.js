const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.route("/")
    .get((req, res) => {
        res.render("index");
    });
    
app.route("/sensor")
    .get((req, res) => {
        res.render("sensor");
    });

const server = app.listen(3000, function() {
    console.log("Node.js is listening to PORT:" + server.address().port)
});