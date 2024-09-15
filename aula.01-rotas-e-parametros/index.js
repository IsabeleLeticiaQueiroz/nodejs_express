//-1- importar o express na aplicacao
const express = require("express"); // CommonJS Modules
// criando uma instancia do express
const app = express();

//criando a rota principal
app.get("/", (req, res) => {
  res.send("Bem vindo! Hello!");
});

//rota perfil
//:nome é um parametro obrigatorio
//:nome? é um parâmetro opcional
app.get("/perfil/:nome?", (req, res) => {
  const nome = req.params.nome;
  if (nome) {
    // se o nome igual a true
    res.send(`<h1>Perfil do usuario, olá ${nome}</h1>`);
  } else {
    res.send(`<h2>Faça login para acessar seu perfil</h2>`);
  }
});

//rota de videos
//playlist e video? - parametros opcionais
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  const video = req.params.video;
  if (playlist && video == undefined) {
    res.send(`<h1>Voce esta na playlist de ${playlist}.</h1>`);
  }
  if (playlist && video) {
    res.send(
      `<h1>Voce esta na playlist de ${playlist}.</h1><br>Reproduzindo o vídeo ${video}...`
    );
  } else {
    res.send("<h1>Página de vídeos</h1>");
  }
});

// iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`ocorreu um erro`);
  } else {
    console.log(`servidor iniciado com sucessoo aee`);
  }
});
