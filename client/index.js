const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
// app.use("/sensor", express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + '/public'));

app.route("/")
    .get((req, res) => {
        // app.use(express.static(path.join(__dirname + "/public")));
        res.render("index");
    });
    
app.route("/sensor")
    .get((req, res) => {
        // app.use(express.static(path.join(__dirname + "/public")));
        res.render("sensor");
    });

const server = app.listen(3000, function() {
    console.log("Node.js is listening to PORT:" + server.address().port)
});