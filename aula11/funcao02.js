/*
function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2, 5))

Retorna = 7

*/

/*
function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2))

Retorna = NaN (Not a Number)
*/

// Também pode ser feito assim:

function soma(n1=0, n2=0) { // Parâmetros Opcionais
    return n1 + n2
}

console.log(soma(7, 3)) // Mas se colocar só um número aqui em baixo um dos parâmetros em cima ja vai estar valendo zero e não vai dar NaN