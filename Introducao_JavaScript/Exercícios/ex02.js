/*
2 - Utilize if...else para escrever um código que defina três variáveis com os valores dos três
ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de
um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma
mensagem de erro.
*/

/* 
DICA: para os ângulos serem de um triângulo válido, a soma dos três ângulos deve ser 180 graus. Um ângulo será considerado
inválido se não tiver um valor positivo.
*/

const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;

const somaAngulos = angulo1 + angulo2 + angulo3;

const angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulosPositivos) {
    if (somaAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Erro: ângulo inválido!");
}