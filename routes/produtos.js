const getConnection = require('../db/getConnection');

module.exports = function (servidor) {
    servidor.get('/produtos', function getProdutos(req, res){

    const conexao = getConnection();

    conexao.query("SELECT * FROM livros", function respondeBanco(mysqlErro, resposta){
        try{
            if(mysqlErro){
               throw mysqlErro;
            } else

            res.render('produtos/lista', {livros: resposta});//Renderiza o lista.ejs com os valores passados em res

            conexao.end();
        }
        catch(erro){
            next(erro);
        }
    });
});

    servidor.get('/produtos/form', function (req, res){
        res.render('produtos/form', {validationErrors: [] });
    });

    servidor.post('/produtos', function(req, res, next){
        const conexao = getConnection();

        const livroNovo = {
            titulo: "Teste final",
            preco: 45,
            descricao: "Oi"
        }

        conexao.query("INSERT INTO livros SET ?", livroNovo, function(erroMysql){
            try{
                if(erroMysql) throw erroMysql;
                res.redirect('/produtos');
            }
            catch(erro){
                next(erro);
            }
        });
    });
}