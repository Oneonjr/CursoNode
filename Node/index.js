const express = require("express");
const server = express();

//http://localhost:3000/hello?nome=Oneon&idade=25
//Query Params = ?nome=Oneon&idade=25

server.get("/hello", (req, res) => {
    const {nome, idade} = req.query;

    return res.json({
        title : "Hello World",
        message: `Olá, ${nome} tudo bem !?`,
        idade: idade
    });
});


//http://localhost:3000/hello/Oneon
//Rout Params = /hello/:nome

server.get("/hello/:nome", (req,res) => {
    
    const nome = req.params.nome; 

    return res.json({
        title: "Hello World",
        message: `Olá ${nome} tudo bem !?`
    });
});

server.listen(3000);