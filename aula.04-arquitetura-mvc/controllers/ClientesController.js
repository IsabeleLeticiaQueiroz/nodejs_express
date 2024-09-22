import express from 'express' //es6 modules
const router = express.Router() //chamando o metodo de rotas

//rota de clientes
router.get("/clientes", (req, res) => {
    const clientes = [
        {nome: "Isabele Queiroz", cpf: "123.456.789.00", endereco: "Rua 1, bairro2m Cidade3-SP"},
        {nome: "Marcelo Bruno", cpf: "123.456.789.00", endereco: "Rua 1, bairro2m Cidade3-SP"},
        {nome: "Marcos Queiroz", cpf: "123.456.789.00", endereco: "Rua 1, bairro2m Cidade3-SP"},
        {nome: "Glaucio Queiroz", cpf: "123.456.789.00", endereco: "Rua 1, bairro2m Cidade3-SP"}
        //simulacao de banco de dados
    ]
    //pedir para renderizar
    res.render("clientes", {
        clientes: clientes //endereco da pagina: tabela com valores
    })
})
export default router