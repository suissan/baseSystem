"use strict";

// express・その周辺の読み込み
const express = require("express");
const app = express();
const pug = require("pug");

// ベースの情報を取得するモジュールを読み込み
const { getBaseInfo } = require("./get-baseinfo");

//テンプレートエンジン
app.set("view engine", "pug");
app.set("views", "./views");

// 静的ファイルを使用可能に設定
app.use(express.static('public'));

// 起動ポート
const PORT = 8000;

apps.set()

app.get("/", (req, res) => {
    res.send("hello world");
    getBaseInfo();
})

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});