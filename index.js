import express from 'express'
const app = express();
import DoadoresController from './controllers/DoadoresController.js'
import IdososController from './controllers/IdososController.js'
import VoluntariosController from './controllers/VoluntariosController.js'
import VisitasController from './controllers/VisitasController.js'
import FuncionariosController from './controllers/FuncionariosController.js'  
import EstoqueController from './controllers/EstoqueController.js'

// Importando o Sequelize
import connection from "./config/sequelize-config.js"

// Realizando a conexão com o banco de dados
connection.authenticate().then(()=> {
console.log("Conexão com o banco de dados feita com sucesso!")
}).catch((error) => {
console.log(error)
})

// Criando o banco de dados se ele não existir
connection.query(`CREATE DATABASE IF NOT EXISTS
asilo;`).then(() => {
console.log("O banco de dados está criado.")
}).catch((error) => {
console.log(error)
})

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", DoadoresController);
app.use("/", IdososController);
app.use("/", VoluntariosController);
app.use("/", VisitasController);
app.use("/", FuncionariosController);
app.use("/", EstoqueController);



// ROTA PRINCIPAL
app.get("/", function (req, res) {
  res.render("index");
});

// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port, function (error) {
  if (error) {
    console.log(`Não foi possível iniciar o servidor. Erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port} !`);
  }
});

