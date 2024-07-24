var express = require("express")
var app = express();

//configurando o servidor para usar o EJS

app.set('view engine', 'ejs');

//passandoo caminho da pasta views

app.set('views', 'src/views');

//mostrando a pagina index.ejs

app.get('/', function (request, response) {
    response.render('index');
});


//configurando uma pasta publica para arquivos estaticos
app.use(express.static('src/public'));


//iniciando o servidor

app.listen(3003, function () {
    console.log('servidor rodando na porta 3003');
});