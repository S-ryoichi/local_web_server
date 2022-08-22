const express = require("express");
const app = express();

const connectCSV = require("./node/readcsv");

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.route("/")
    .get((req, res) => {
        const tempData = connectCSV.readTempData();
        res.render("index", {tempData: JSON.stringify(tempData)});
    });

app.route("/fetch")
    .get(jsonParser, (req, res) => {
        const tempData = connectCSV.readTempData();
        console.log(tempData);
        res.json(tempData);
    })

app.route("/inputform")
    .get((req, res) => {
        res.render("input_form");
    });

app.route("/temp")
    .get((req, res) => {
        const timestamp = new Date();
        const jsonData = {"timestamp": timestamp, "temp": "10"};
        connectCSV.writeTempData(jsonData);
        res.redirect("/");
    })
    .post((req, res) => {
        const recvData = req.body;
        console.log(req.body);
        connectCSV.writeTempData(req.body);
    });

const server = app.listen(3000, function() {
    console.log("Node.js is listening to PORT:" + server.address().port)
});