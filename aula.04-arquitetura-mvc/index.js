//-1- importar o express na aplicacao
//const express = require("express"); // CommonJS Modules
import express from "express";
// criando uma instancia do express
const app = express();

//importando os controllers q possuem as rotas, apos isso mais abaixo deve dizer que se quer utilizar o controller q foi inmportado
import ClientesController from "./controllers/ClientesController.js";

//definindo o ejs como renderizador de paginas
//criar nova pasta com o nome de views
app.set("view engine", "ejs");

//DEFINIR A PASTA DOS ARQUIVOS ESTATICOS
// É PADRAO DO EXPRESS UMA PASTA CHAMADA PUBLIC Q CONTENHA ESSES ARQUIVOS
app.use(express.static("public"));

//definindo o uso das rotas dos controllers
app.use("/", ClientesController)
//dessa forma esta sendo dito que usaremos todas as rotas dentro do arquivo clientescontroller

//criando a rota principal
app.get("/", (req, res) => {
  //res.send("Bem vindo! Hello!"); -> usado para mandar uma mensagem
  //res.render é para enviar uma pagina! assim é possivel renderizar uma pagina para o usuario
  // nao é necessario escrever o .extensao dentro do parenteses
  res.render("index");
});

// iniciando o servidor na porta 808
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`ocorreu um erro`);
  } else {
    console.log(`servidor iniciado com sucessoo em http://localhost:${port}`);
  }
});
