//-1- importar o express na aplicacao
const express = require("express"); // CommonJS Modules
// criando uma instancia do express
const app = express();

//criando a rota principal
app.get("/", function(req,res){
    res.send("Bem vindo!")
})

// iniciando o servidor na porta 8080
app.listen(8080, function (error) {
  if (error) {
    console.log(`ocorreu um erro`);
  } else {
    console.log(`servidor iniciado com sucesso`);
  }
});
