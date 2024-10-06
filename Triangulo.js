module.exports = class Triangulo {
    constructor(lado1, lado2, lado3) {
        this._lado1 = lado1;
        this._lado2 = lado2;
        this._lado3 = lado3;
    }

    // Getters e Setters
    set lado1(lado1) {
        this._lado1 = lado1;
    }

    get lado1() {
        return this._lado1;
    }

    set lado2(lado2) {
        this._lado2 = lado2;
    }

    get lado2() {
        return this._lado2;
    }

    set lado3(lado3) {
        this._lado3 = lado3;
    }

    get lado3() {
        return this._lado3;
    }

    // Método para verificar o tipo de triângulo
    verificarTipoTriangulo() {
        if (this._lado1 === this._lado2 && this._lado2 === this._lado3) {
            return "Equilátero"; // Todos os lados são iguais
        } else if (this._lado1 === this._lado2 || this._lado2 === this._lado3 || this._lado1 === this._lado3) {
            return "Isósceles"; // Dois lados são iguais
        } else {
            return "Escaleno"; // Todos os lados são diferentes
        }
    }

    // Método para exibir o resultado final
    exibirResultado() {
        const tipoTriangulo = this.verificarTipoTriangulo();
        return {
            tipoTriangulo: tipoTriangulo
        };
    }
};
