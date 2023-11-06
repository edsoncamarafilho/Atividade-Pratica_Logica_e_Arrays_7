// Atividade prática 07 - Arrays 1  | Despertar.dev | Carla Silva

//------------------------------------------------------------------

// 1. Criar um array e percorrê-lo utilizando o loop for
// a. Crie um array com o nome "nomes" e adicione 4 nomes de
// pessoas que você conhece
// b. Utilize o loop for para percorrer o array e exibir os nomes na
// tela


let nomes =['Armando', 'João', 'Claudomiro', 'Jetson']

for(let i = 0; i < nomes.length; i++){
    document.write(`${nomes[i]} `)
}

/* Usando For of neste exercício */
// for (const nome of nomes) {
//     console.log (nome)
// }

//-----------------------------------------------------------------

// 2. Criar um array e percorrê-lo utilizando o loop for of
// a. Crie um array com o nome "numeros" e adicione 5 números de
// sua escolha
// b. Utilize o loop for of para percorrer o array e exibir a soma dos
// números na tela

let numeros = [5, 8, 9, 10, 76]

let soma = 0

for (let numero of numeros) {
    soma += numero;
} document.write(`<br><br>A soma dos números é:${soma}<br><br>`);

//-----------------------------------------------------------------

// 3. Utilizar os métodos push, pop, unshift e shift para manipular um
// array
// a. Crie um array com o nome "frutas" e adicione 3 tipos de frutas
// de sua escolha
// b. Utilize o método push para adicionar uma fruta no final do
// array
// c. Utilize o método pop para remover a última fruta do array
// d. Utilize o método unshift para adicionar uma fruta no início do
// array
// e. Utilize o método shift para remover a primeira fruta do array
// f. Exiba o array resultante na tela


let frutas = ['Banana','Morango','Maça']

frutas.push('Abacaxi')

frutas.pop()

frutas.unshift('Kiwi')

frutas.shift()

document.write(frutas)

//-----------------------------------------------------------------