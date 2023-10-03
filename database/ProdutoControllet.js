const express = require("express");
const router = express.Router();
const Produto = require("./Produto");

router.get("/produto", (req, res)=>{
    res.render("produto");
})

app.get("/usuario", (req, res) => {
    res.send("Oi usuário!");
});

app.get("/produto", (req, res) => {
    res.render("produto");
});

app.post("/salvarProduto", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Produto.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    });
});

app.get("/produtolist", (req, res) => {
    Produto.findAll({raw : true}).then(produtos => {
        console.log(produtos);
    });
    res.render("index");
});