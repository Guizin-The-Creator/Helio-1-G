const express = require('express');
const ControlTriangulo = require('../control/ControlTriangulo'); 
const MiddlewareTriangulo = require('../middleware/MiddlewareTriangulo');

module.exports = class RouterTriangulo {
    criarRotasTriangulo() {
        this._router = express.Router();
        this._controleTriangulo = new ControlTriangulo(); // Instância da classe ControlTriangulo
        this._middlewareTriangulo = new MiddlewareTriangulo(); // Instância do middleware para validar lados do triângulo

        // Trata a rota GET: /triangulo/:lado1/:lado2/:lado3
        this._router.get('/:lado1/:lado2/:lado3',
            this._middlewareTriangulo.validar_lados_triangulo, // Valida se os lados do triângulo são válidos
            this._controleTriangulo.controle_get_verificar_tipo_triangulo // Chama o controlador para verificar o tipo de triângulo
        );

        return this._router;
    }
};
