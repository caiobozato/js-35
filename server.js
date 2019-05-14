//Hoisting

const http = require('http');
const porta = 3000;

//Request listener
const servidor = http.createServer(
    function responseFromServer(request, response){
        if(request.url === '/'){
            response.end("Home");
        }
        if(request.url === '/produtos'){
            response.end("Produtos");
        }
    
        response.end("404");
    });

//Handler
//Função de callback
servidor.listen(porta, function(){
    console.log("Server rodando na porta: "+ porta);
});

//server.adress().port ele mostra a porta do server escolhida pelo node