const servidor = require('./servidor');

//const porta = process.env.PORTA == undefined ? 3000 : process.env.PORTA;
const porta = process.env.PORTA || 3000; //Define a porta


servidor.listen(porta, function(){
    console.log("Servidor rodando na porta " + porta);
});
