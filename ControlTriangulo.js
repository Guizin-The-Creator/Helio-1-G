const Triangulo = require('../model/Triangulo'); 

module.exports = class ControlTriangulo {
    controle_get_verificar_tipo_triangulo(request, response) {
        // Recupera os parâmetros passados pela URI
        const lado1 = parseFloat(request.params.lado1);
        const lado2 = parseFloat(request.params.lado2);
        const lado3 = parseFloat(request.params.lado3);

        // Instância da classe Triangulo
        const triangulo = new Triangulo(lado1, lado2, lado3);
        
        // Calcula o tipo de triângulo
        const resultado = triangulo.exibirResultado();

        // Retorna o tipo de triângulo
        response.status(200).send({
            tipoTriangulo: resultado.tipoTriangulo
        });
    }
};
