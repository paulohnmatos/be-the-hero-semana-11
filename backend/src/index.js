const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, function(){
    console.log("Servidor Rodando na Porta 3333 com Sucesso!");
});