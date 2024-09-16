//-1- importar o express na aplicacao
const express = require("express"); // CommonJS Modules
// criando uma instancia do express
const app = express();

//definindo o ejs como renderizador de paginas
//criar nova pasta com o nome de views
app.set("view engine", "ejs");

//criando a rota principal
app.get("/", (req, res) => {
  //res.send("Bem vindo! Hello!"); -> usado para mandar uma mensagem
  //res.render é para enviar uma pagina! assim é possivel renderizar uma pagina para o usuario
  // nao é necessario escrever o .extensao dentro do parenteses
  res.render("index");
});

//rota perfil
//:nome é um parametro obrigatorio
//:nome? é um parâmetro opcional
app.get("/perfil/:nome", (req, res) => {
  const nome = req.params.nome; 
  res.render("perfil", { nome: nome }); 
});


//rota de videos
//playlist e video? - parametros opcionais
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  const video = req.params.video;
  const playlists = {
    tutoriais: ["Tutorial 1", "Tutorial 2", "Tutorial 3"],
    musicas: ["Música 1", "Música 2", "Música 3"],
    aulas: ["Aula 1", "Aula 2", "Aula 3"],
    vlogs: ["Vlog 1", "Vlog 2", "Vlog 3"],
  };
  const listaPlaylists = Object.keys(playlists);
  const listaVideos = playlists[playlist] || [];
  res.render("playlist", {
    playlist: playlist,
    video: video,
    listaPlaylists: listaPlaylists,
    listaVideos: listaVideos,
  });
});

//rota de produtos
app.get("/produtos/:produto?", (req, res) => {
  const listaProdutos = [
    "Computador",
    "Celular",
    "Tablet",
    "Notebook",
    "Sylvanians",
    "Livros",
    "Maquiagem",
  ];

  const produto = req.params.produto;
  //passar a var p/ pagina
  //1-renderizar a pagina e , {var:var}

  res.render("produtos", {
    produto: produto,
    //a variavel do lado esquerdo é a que vai ser criada pra ser mandada no ejs, ja a da direita é a que esta declarada no js
    listaProdutos: listaProdutos, //passando agora a minha array
  });
});

//rota pedidos
app.get("/pedidos", (req, res) => {
  //array de objeto com os pedidos
  const pedidos = [
    { produto: "Celular", valor: 3000 },
    { produto: "Computador", valor: 4000 },
    { produto: "Tablet", valor: 2000 },
    { produto: "Notebook", valor: 3800 },
  ];
  res.render("pedidos", {
    pedidos: pedidos,
  });
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
