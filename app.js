alert("Boas vindas ao jogo do número secreto");

let chute;
let numeroMaximo = parseInt(prompt("Defina um número máximo de possibilidades: "));
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log ("Número Secreto: ", numeroSecreto);
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    console.log("Valor do chute: ", chute);

    if (chute == numeroSecreto) {
        break;
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que: ${chute}`);
        } else {
            alert(`O número secreto é maior que: ${chute}`);
        }  
        tentativas++;
    }  
} 
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso aí, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);