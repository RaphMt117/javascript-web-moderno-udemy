var numero = 1

{
    let numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)


const t = [1, 2, 3, 4, 5, 6, 7]

for (let i = 0; i < t.length; i++) {
    const element = t[i];
    console.log(element)
}

// erro de escopo:
//console.log(i)

