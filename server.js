var http = require('http');

var servidor = http.createServer(responseFromServer);

function responseFromServer(request, response){
    if(request.url === '/'){
        response.end("Home");
    }
    if(request.url === '/produtos'){
        response.end("Produtos");
    }

    response.end("404");
}

servidor.listen(3000);