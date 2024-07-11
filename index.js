"use strict";

// express起動
const express = require("express");
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
    res.send("hello world");
})

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});
console.log("test");