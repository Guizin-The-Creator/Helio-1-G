module.exports = class MiddlewareTriangulo {
    validar_lados_triangulo(request, response, next) {
        const lado1 = parseFloat(request.params.lado1);
        const lado2 = parseFloat(request.params.lado2);
        const lado3 = parseFloat(request.params.lado3);

        // Verifica se os lados são números válidos
        if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
            const objResposta = {
                status: false,
                msg: "Todos os lados devem ser números válidos.",
            };
            return response.status(400).send(objResposta);
        }

        // Verifica se os lados são valores positivos
        if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
            const objResposta = {
                status: false,
                msg: "Os lados do triângulo devem ser maiores que zero.",
            };
            return response.status(400).send(objResposta);
        }

        next(); // Chama o próximo middleware ou rota
    }
};
