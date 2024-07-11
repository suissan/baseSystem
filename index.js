"use strict";

// express起動
const express = require("express");
const { getBaseInfo } = require("./get-baseinfo");
const app = express();


const PORT = 8000;

app.get("/", (req, res) => {
    res.send("hello world");
    getBaseInfo();
})

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});