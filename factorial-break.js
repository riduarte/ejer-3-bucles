// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let num = 5
let Factnum =num
while (num >1) {
    if(num === 1 || num === 0)
    break;
    num--;
    Factnum= Factnum * num;
} console.log(Factnum)