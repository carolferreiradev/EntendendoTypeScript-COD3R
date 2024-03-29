"use strict";
// String
var nome = 'João';
// nome = 50 (não é possível)
console.log(nome);
// Numbers
var idade = 27;
// idade = 'Ana' (não é possível)
idade = 27.6;
console.log(idade);
// Boolean
var possuiHobbies = false;
// possuiHobbies = 1 (não é possível)
console.log(possuiHobbies);
// TIPOS EXPLICITOS
var minhaidade;
minhaidade = 27;
console.log(typeof minhaidade);
// minhaidade = 'idade é 27'
// console.log(typeof minhaidade)
// ARRAY
var hobbies = ["Cozinhar", "Praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
// TUPLA
var endereco = ["Av Principal", 99, 123];
console.log(endereco);
// ENUMS
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Amarelo);
// ANY
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2021 };
console.log(carro);
// FUNÇÕES
function retornMeuNome() {
    return nome;
    // return minhaCor (o tipo de retorno não é valido)
}
console.log(retornMeuNome());
function digaOi() {
    console.log('Oi');
    // return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(10.5, 20));
// Funções como Tipos
var calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
// Objetos
var usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
var colaborador = {
    supervisores: ['Maria', 'Marcelo'],
    baterPonto: function (x) {
        return x <= 8 ? 'Ponto Normal' : 'Fora do horario';
    }
};
console.log("colaborador: " + colaborador.supervisores);
console.log("colaborador: " + colaborador.baterPonto(9));
var colaborador2 = {
    supervisores: ['Paula', 'Luis'],
    baterPonto: function (y) {
        return y <= 8 ? 'Ponto Normal' : 'Fora do Horário';
    }
};
console.log("colaborador2: " + colaborador2.supervisores);
console.log("colaborador2: " + colaborador2.baterPonto(5));
// Múltiplos Tipos com Union Types
var nota;
nota = 10;
console.log(nota);
nota = '10';
console.log(nota);
// Never
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 1,
    validaProduto: function () {
        if (!produto.nome || produto.nome.trim().length == 0) {
            falha('Produto precisa de um nome');
        }
        if (produto.preco <= 0) {
            falha('Produto necessita de um preço maior que 0');
        }
    }
};
produto.validaProduto();
// Null
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'Carol',
    tel1: 99999999,
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
