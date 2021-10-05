const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const GamesController = require("./controllers/GamesController");
const connection = require("./database/database");

//Database
connection.authenticate().then(() => {console.log("Database connect")}).catch((err) => {console.log(err)});

//setting
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//controller
app.use("/", GamesController);


app.listen(8080, () => {
    console.log("Server is running");
})