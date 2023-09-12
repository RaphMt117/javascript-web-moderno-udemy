function random ({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min)+min
    return Math.floor(valor)
}

console.log(random({min: 50, max: 100 }))

