alert("Boas vindas ao jogo do número secreto");

let chute;
let numeroMaximo = parseInt(prompt("Defina um número máximo: "));
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log ("Número Secreto: ", numeroSecreto);
let tentativas = 1;

//ENQUANTO o chute for DIFERENTE do numero secreto, repita isso:
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    console.log("Valor do chute: ", chute);

//SE o chute for IGUAL ao número secreto, faça isso:
    if (chute == numeroSecreto) {
        break;
    } else {
        alert("Errou :(");
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que: ${chute}`);
        } else {
            alert(`O número secreto é maior que: ${chute}`);
        }  
        //tentativas = tentativas + 1
        tentativas++;
    }  
} 
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso aí, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);