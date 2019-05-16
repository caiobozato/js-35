const express = require('express');
const servidor = express();

servidor.set("view engine", "ejs");

require('./routes/home')(servidor);//no require eu estou recebendo a função da rota, e logo após estou executando a mesma, passando o servidor como parametro

require('./routes/produtos')(servidor);

servidor.use(express.static('./static')); //Carrega os arquivos CSS e JS

servidor.use(function get404(request, resposta){
    resposta.status(404);
    resposta.render("erros/erro.ejs", {erro: "Página não encontrada"});
}); //Retorna a página de erro e statusCode 404 quando o request não existir

module.exports = servidor;