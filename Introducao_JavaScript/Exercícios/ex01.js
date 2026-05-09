/* 
1 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no 
começo do seu código, duas variáveis com os valores que serão comparados
*/

const numero1 = 30;
const numero2 = 200;

if (numero1 > numero2) {
    console.log(`O número ${numero1} é maior que o número ${numero2}`);
} else if (numero1 < numero2) {
    console.log(`O número ${numero2} é maior que o número ${numero1}`);
} else {
    console.log(`Os números ${numero1} e ${numero2} são iguais`);
}