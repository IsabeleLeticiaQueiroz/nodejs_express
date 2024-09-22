//orm - sequelize
// o q uma orm faz? pega os dados da tabela e transforma em objeto pro codigo e pega o objeto do codigo etransforma em dados para  a tabela!!
import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

//define cria a tabela no banco!!
const Cliente = connection.define('clientes', {
    nome:{
    type: Sequelize.STRING,
    alloNull: false
    },

    cpf: {
        type: Sequelize.STRING,
        alloNull: false
    },

    endereco:{
        type: Sequelize.STRING,
        alloNull: false
    }
});
//metodo.sincroniza({parametro que nao forca a criacao da tabela caso ela ja exista})
Cliente.sync({force: false});
export default Cliente;
