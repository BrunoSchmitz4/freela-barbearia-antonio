// // //O node é um Javascript puro
// // console.log("Gerenciador Financeiro")

// const express = require("express");

// const app = express();


// Conexão com BD MySQL
// const mysql = require('mysql');
// //Fazer a inclusão e conexão
// const connection = mysql.createConnection({
//     host: 'localhost', // Hospedagem local
//     user: 'brunotwo', // Usuário da conexão (é preciso atualizar o usuário quando for atualizar o mysql)
//     password: '123456', // Senha da conexão
//     database: 'bruno' // Banco de dados da conexão
// });

// connection.connect(function(err){
//     if (err) console.error('Erro ao realizar a conexao com o BD:' + err.stack); return;
// });

// //                      Inserir nome + email
// connection.query("INSERT INTO users(nome, email) VALUES ('Mateus', 'mateus@celke.com.br')",function(err, result){
//     if(!err){
//         console.log('Usuario cadastrado com sucesso!');
//     }else{
//         console.log('Erro ao cadastrar usuario!');
//     }
// });

//                      Atualizar nome
// connection.query("UPDATE users SET nome = 'Jessica' WHERE id = 3", function(err, result){
//     if(!err){
//         console.log('Usuario editado com sucesso!');
//     }else{
//         console.log('Erro: o usuário nao foi editado com sucesso!');
//     }
// });

//                      Atualizar email
// connection.query("UPDATE users SET email = 'max@celke.com.br' WHERE id = 5", function(err, result){
//     if(!err){
//         console.log('Email do usuario editado com sucesso!');
//     }else{
//         console.log('Erro: o usuário nao foi editado com sucesso!');
//     }
// });

// Deletar usuário

// connection.query("DELETE FROM users WHERE id = 4", function(err, result){
//     if(!err){
//         console.log("Usuario deletado com sucesso!");
//     }else{
//         console.log("Erro: o usuario nao foi apagado com sucesso!");
//     }
// });


// Conteúdo abaixo se tornou obsoleto devido progresso das aulas

// Função para fazer a conexão com verificação de erro
// connection.connect(function(err){
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }

//     console.log("connected as id " + connection.threadId);
// });

// // Comandos MySQL no código - Select

// connection.query('SELECT * FROM users', function(err, rows, fields){
//     if(!err){
//         console.log('Resultado: ', rows);
//     }else{
//         console.log('Erro ao realizar a consulta! :(');
//     }
// })





// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/src/index.html");
// });

// app.get("/contato", function(req, res){
//     res.send("Pagina de contato");
// });

// app.get("/sobre-empresa", function(req, res){
//     res.sendFile(__dirname + "/src/sobre-empresa.html");
// });

// app.get("/blog", function(req, res){
//     res.send("Pagina do blog");
// });

// app.listen(8080);

// var http = require ('http'); // carrega um módulo do próprio node

// // localhost:8080
// http.createServer(function(req, res){
//     res.end("Gerenciador Financeiro")
// }).listen(8080) //startar o server

// Express é usado para criar rotas entre os arquivos .js

// Startar servidor sem nodemon: node index.js
// startar servidor com nodemon: nodemon index.js

// nodemon pausa e retoma automáticamente o servidor quando ocorrer atualizações no código, bastando apenas recarregar a página no próprio navegador.