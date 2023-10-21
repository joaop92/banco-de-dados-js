// Importar o módulo do MySQL
const mysql = require("mysql");

// Obter as informações de conexão do banco de dados
const config = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "my_database",
};

// Criar uma conexão com o banco de dados
const connection = mysql.createConnection(config);

// Tratar o erro de conexão
try {
  connection.connect();
  return "Conexão com o banco de dados bem-sucedida!";
} catch (error) {
  return "Erro ao conectar com o banco de dados: " + error;
}
