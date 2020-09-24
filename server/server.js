"use strick";
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get("/status/:parameter", (req, res) => {
    let param = req.params.parameter;
    res.send("The status is:" + param);
});

app.listen(3000, () => {});
