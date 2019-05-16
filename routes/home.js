module.exports = function (servidor){
        servidor.get('/', function (req, res){
        res.render('index');
    }); //Renderiza o html do template EJS
}

//eu exporto a regra da rota como uma função, e passo o servidor como parâmetro, pois a rota precisa da variável do servidor pra rodar