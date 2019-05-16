const mysql = require('mysql');

module.exports = function (servidor) {
    servidor.get('/produtos', function getProdutos(req, res){

    const conexao = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "cdc",
        port: 3306
    });

    conexao.query("SELECT * FROM livros", function respondeBanco(erro, resposta){
        resposta.render('produtos/lista', {livros: resposta});//Renderiza o lista.ejs com os valores passados em res
        conexao.end();
    });
});

servidor.get('/produtos/form', function (req, res){
    res.render('produtos/form', {validationErrors: lista});
});
}