/*
var c = 1
while (c <= 6) { // Estrutura de repetição com teste lógico no início
    console.log(`Passo ${c}`)
    c++ // Mesma coisa que c = c + 1
}
*/
/*
var c = 1
do { // Estrutura de repetição com teste lógico no final
    console.log(`Passo ${c}`)
    c++ // Mesma coisa que c = c + 1
} while (c <= 6)
*/
/*
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
*/

// Estrutura de repetição com variável de controle

for (var c = 1 /* Início */; c <= 10 /* Teste */; c++ /* Incremento */) {
    console.log(`Passo ${c}`)
}