/* 
4 - Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido 
a ser recebido

DICA:
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social)
e o IR (Imposto de Renda). A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as
seguintes referências:

INSS
Salário bruto até R$ 1.518,00: alíquota de 7,5%;
Salário bruto de R$ 1.518,01 a R$ 2.793,88: alíquota de 9%;
Salário bruto de R$ 2.793,89 a R$ 4.190,83: alíquota de 12%;
Salário bruto de R$ 4.190,84 até R$ 8.157,41: alíquota de 14%.

IR
Até R$ 2.259,20: isento de imposto de renda;
De R$ 2.259,21 a R$ 2.826,65: alíquota de 7,5% e parcela de R$ 169,44 a deduzir do imposto;
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 381,44 a deduzir do imposto;
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 662,77 a deduzir do imposto;
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 896,00 a deduzir do imposto.

O cálculo deve ser o demonstrado a seguir

O salário bruto é de R$ 3.000,00. Para o INSS (tabela progressiva):

Até 1.518,00 → 7,5% = R$ 113,85
De 1.518,01 até 2.793,88 → 9% = R$ 114,83
De 2.793,89 até 3.000,00 → 12% = R$ 24,73

Total INSS = R$ 253,41
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS:
R$ 3.000,00 − R$ 253,41 = R$ 2.746,59
Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 2.259,21 e R$ 2.826,65, em que a alíquota é de 
7,5%, com parcela de R$ 169,44 a deduzir do imposto. Assim, tem-se:
R$ 2.746,59 - salário com INSS já deduzido;
7,5% - alíquota de imposto de renda, que representa um desconto de R$ 205,99;
R$ 169,44 - parcela a ser deduzida do imposto de renda.
Para obter o valor do imposto de renda, calcula-se:
R$ 205,99 − R$ 169,44 = R$ 36,55.
Para obter o salário líquido, calcula-se:
R$ 2.746,59 − R$ 36,55 = R$ 2.710,04.
Resultado: R$ 2611.44
*/

const salarioBruto = 3000.00;
let salarioBase;
let salarioLiquido;
let inss;
let ir;

console.log(`Salário Bruto = R$ ${salarioBruto}`);


if (salarioBruto <= 1518.00) {
    inss = salarioBruto * 0.075;
    console.log("Sua alíquota é de 7.5%");
    console.log(`Total INSS = R$ ${inss}`);
    salarioBase = salarioBruto - inss;
    console.log(`Salário Base = R$ ${salarioBase}`);
} else if (salarioBruto <= 2793.88) {
    inss = salarioBruto * 0.09;
    console.log("Sua alíquota é de 9%");
    console.log(`Total INSS = R$ ${inss}`);
    salarioBase = salarioBruto - inss;
    console.log(`Salário Base = R$ ${salarioBase}`);
} else if (salarioBruto <= 4190.83) {
    inss = salarioBruto * 0.12;
    console.log("Sua alíquota é de 12%");
    console.log(`Total INSS = R$ ${inss}`);
    salarioBase = salarioBruto - inss;
    console.log(`Salário Base = R$ ${salarioBase}`);
} else if (salarioBruto <= 8157.41) {
    inss = salarioBruto * 0.14;
    console.log("Sua alíquota é de 14%");
    console.log(`Total INSS = R$ ${inss}`);
    salarioBase = salarioBruto - inss;
    console.log(`Salário Base = R$ ${salarioBase}`);
} else {
    console.log("Salário acima do teto do INSS.");
}

