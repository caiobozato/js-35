const express = require('express');
const servidor = express();

servidor.get('/', function getHome(request, resposta){
    resposta.render('index.ejs');
}); //Renderiza o html do template EJS, na pasta views

servidor.get('/produtos', function getProdutos(request, resposta){
    const listaLivros = [
        {
            'titulo': 'Android',
            'preco': 22,
            'descricao': 'Livro teste'
        },
        {
            'titulo': 'MacOS',
            'preco': 45,
            'descricao': 'Livro teste 2'
        }
    ]
    resposta.render('produtos/lista.ejs', {livros: listaLivros});
});//Renderiza o lista.ejs com os valores passado em listaLivros

servidor.use(express.static('./static')); //Carrega os arquivos CSS e JS

servidor.use(function get404(request, resposta){
    resposta.status(404);
    resposta.render("erros/erro.ejs", {erro: "Página não encontrada"});
}); //Retorna a página de erro e statusCode 404 quando o request não existir

module.exports = servidor;