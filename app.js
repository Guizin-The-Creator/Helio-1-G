const express = require('express');
const RouterTriangulo = require('./router/RouterTriangulo'); 
const app = express();
const portaServico = 3000;

// Middleware para habilitar o parsing de JSON no corpo das requisições
app.use(express.json());

const roteadorTriangulo = new RouterTriangulo(); 
// Caso chegue uma requisição para /triangulo
app.use('/triangulo', roteadorTriangulo.criarRotasTriangulo()); 

// Inicia a espera por requisições HTTP
app.listen(portaServico, () => {
    console.log(`API rodando no endereço: http://localhost:${portaServico}/triangulo`); 
});
