const express = require('express');

const servidor = express();

//const porta = process.env.PORTA == undefined ? 3000 : process.env.PORTA;
const porta = process.env.PORTA || 3000;

servidor.get('/', function getHome(request, resposta){
    resposta.end('Home');
});

servidor.get('/produtos', function getProdutos(request, resposta){
    resposta.end('Produtos');
});

servidor.listen(porta, function(){
    console.log("Servidor rodando na porta " + porta);
});
