//Hoisting

const http = require('http');
const porta = 3000;

//Request listener
const servidor = http.createServer(
    function responseFromServer(request, response){
        if(request.url === '/'){
            response.end("<h1>Home</h1>");
        }
        else if(request.url === '/produtos'){
            response.end("Produtos");
        }
        
        response.statusCode = 404;
        response.end("404");
    });

//Handler
//Função de callback
servidor.listen(porta, function(){
    console.log("Server rodando na porta: "+ porta);
});

//server.adress().port ele mostra a porta do server escolhida pelo node