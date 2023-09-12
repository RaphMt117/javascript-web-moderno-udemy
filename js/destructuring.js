// novo recurso da ES2015
const pessoa = {
    nome: 'Rafael',
    idade: 18,
    endereco: {
        logradouro: 'rua tal tal',
        numero: 123
    },
}
console.log(pessoa)

// retirar variaveis do objeto
const {nome: n, idade: i} = pessoa

console.log(i-3)
