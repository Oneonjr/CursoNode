const express = require("express");
const server = express();

server.get("/hello", (req, res) => {
    return res.json({
        title : "Hello World",
        message: "Olá, tudo bem !?"
    });
});

server.listen(3000);