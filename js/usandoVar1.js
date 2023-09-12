{
    {
        {
            var testeEscopo = 'estou no escopo!!'
        }
    }
}
console.log(testeEscopo)

function teste(){
    var localFuncao = 'estou na funcao!!'
    console.log(localFuncao)
}

console.log(teste())
