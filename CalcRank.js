const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question('Qual seu o número de vitorias? ', vitorias => {
 
  readline.question('Qual seu o número de vitorias? ', derrotas => { 


//let vitorias = 200
//let derrotas = 10

function calcSaldo(vitorias, derrotas){
    let result = vitorias - derrotas;
    return result;
}
//let sla = calcSaldo(vitorias, derrotas)
if (calcSaldo(vitorias, derrotas) >=0 && calcSaldo(vitorias, derrotas) <=10)
{
    console.log("O Herói tem de saldo de " + calcSaldo(vitorias, derrotas) + " vitorias e está no nível de ferro.")
}
else if (calcSaldo(vitorias, derrotas) >=11 && calcSaldo(vitorias, derrotas) <=20 )
{
    console.log("O Herói tem de saldo de " + calcSaldo(vitorias, derrotas) + " vitorias e está no nível de bronze.")
}

else if (calcSaldo(vitorias, derrotas) >=21 && calcSaldo(vitorias, derrotas) <=50 )
{
    console.log("O Herói tem de saldo de " + calcSaldo(vitorias, derrotas) + " vitorias e está no nível de prata.")
}

else if (calcSaldo(vitorias, derrotas) >=51 && calcSaldo(vitorias, derrotas) <=80 )
{
    console.log("O Herói tem de saldo de " + calcSaldo(vitorias, derrotas) + " vitorias e está no nível de ouro.")
}

else if (calcSaldo(vitorias, derrotas) >= 81 && calcSaldo(vitorias, derrotas) <=90 )
{
    console.log("O Herói tem de saldo de " + calcSaldo(vitorias, derrotas) + " vitorias e está no nível de Diamante.")
}

else if (calcSaldo(vitorias, derrotas) >=91 && calcSaldo(vitorias, derrotas) <=100 )
{
    console.log("O Herói tem de saldo de " + calcSaldo(vitorias, derrotas) + " vitorias e está no nível de Lendário.")
}

else if (calcSaldo(vitorias, derrotas)>=101 )
{
    console.log("O Herói tem de saldo de " + calcSaldo(vitorias, derrotas) + " vitorias e está no nível de imortal.")
}

console.log("Aperte Ctrl+C para para o progama")
 });
});
























/*const resultado = calcSaldo(vitorias, derrotas)
console.log (resultado)*/