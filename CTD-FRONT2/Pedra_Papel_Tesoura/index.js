console.log("aula 2");

let escolhaUsuario = confirm("Deseja realmente sair?");
console.log(escolhaUsuario);

if (escolhaUsuario) {
    alert("saiu da sesão");
}else { // caso falso
    alert("...continua na sessão")}

let valorRecebido = prompt("Informe seu nome", "nome e sobrenome");
console.log(valorRecebido);

let valorA = 10;
let valorConvertido = parseFloat(valorRecebido);
let resultado = valorA + valorConvertido;

alert(resultado);

