/*
+ Adição
- Subtração
* Multiplicação
/ Divisão
% Módulo (resto de uma operação de divisão)
+= Incremento
-= Decremento
*/

let num1 = 10;
let num2 = 5;

let resultado1 = num1 + num2;
let resultado2 = num1 - num2;
let resultado3 = num1 * num2;
let resultado4 = num1 / num2;
let resultado5 = num1 % num2; // Geralmente esse operador é utlizado para verificar se o número é par ou ímpar.
let resultado6 = num1 += 1; // Esse operador é utilizado para incrementar o valor da variável, ou seja, somar um valor a ela.
let resultado7 = num1 -= 1; // Esse operador é utilizado para decrementar o valor da variável, ou seja, subtrair um valor a ela.

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);
console.log(resultado6);
console.log(resultado7);

// Área de  um retângulo
const base = 5;
const altura = 10;
let area = undefined;

area = (base * altura) / 2;

console.log(area);
