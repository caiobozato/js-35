# JS-35
Curso de Node JS + Express

package-lock.json - só salva as versões
package.json - salva nome da package + a versão
^4.16.4 - pega qualquer coisa acima dessa versâo

MJ.M.P - Major, Minor and Patch7

process - variável que contém informações do ambiente em que minha aplicação está rodando

express.get - cria a rota e qual vai ser o retorno

.end - faz parte do módulo http
.send - avalia o conteúdo e envia via protocolo http pro browser

require executa o código, o módulo

npm init -y inicializa o package.json respondendo tudo 'yes'

Router e Controller são parecidos

Modulo dependente, precisa receber o parametro. POrem a função require nao aceita paremetro, entao a gente joga a rota inteira numa funcao

require() é síncrono

os transcompiladores transformam ES6 em CommonJS (Babel, transforma os "import XPTO from 'XPTO');

-----

conectar

bd: cdc

query

- O node nao tem padrao pra connection string num BD, entao preciso procurar no google qual modulo do npm faz o trabalho;

- Depois de instalar o modulo do mysql pelo npm, eu chamo ele pelo require numa constante. Chamo o método createConnection({}) na const criada;

- A query não retorna um array, mas sim um objeto

- Node é single thread

- Cada instancia do node tem uma thread principal e a thread secundária (de eventos)

- Cada requisição fica na fila de thread de eventos (event loop), a saída é pela ordem do termino do processamento

- Escopo léxico, escopo dinamico

- Quando eu faço um POST, nao posso renderizar diretamente a pagina. Devo redirecionar para o get da pagina que eu estou voltando

- createPool - ele conecta igual o createConnection, porém ele faz dentro do limite da instancia

- query precisa de callback
