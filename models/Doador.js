import Sequelize from "sequelize"
import connection from "../config/sequelize-config.js"
const Cliente = connection.define('doador',
{
nome:{
type: Sequelize.STRING,
allowNull: false
},
cpf:{
type: Sequelize.STRING,
allowNull: false
},
endereco:{
type: Sequelize.STRING,
allowNull: false
}
})
doador.sync({force: false})
export default doador