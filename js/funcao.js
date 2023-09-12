// função sem retorno
function imprimirSoma(num1, num2){
    console.log(num1 + num2)
}
imprimirSoma(5, 9)

// função com retorno
function somaReturn(n1, n2){
    return n1 + n2
}
console.log(somaReturn(4, 5))

// função armazenada em variável
const soma = function(a, b){
    return a + b
}
console.log(soma(5, 5))

// função arrow
const somar = (a, b) => {
    return a + b
}
console.log(somar(5, 6))




