/*
&& AND (E)
|| OR (OU) pipe
! NOT (NEGAÇÃO)
*/

const comida = "pao";
const bebida = "agua";

if (comida == "pao" && bebida == "coca") {
    console.log("Pao e Coca");
} else {
    console.log("Pedido errado!");
}

if (comida == "pao" || bebida == "coca") {
    console.log("Pao e Coca");
} else {
    console.log("Pedido errado!");
}

if (!comida == "pao") {
    console.log("Pao");
} else {
    console.log("Pedido errado!");
}