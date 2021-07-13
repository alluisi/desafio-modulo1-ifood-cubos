/* CAÇULA DOS ADULTOS
Um determinado evento é permitido apenas para maiores de idade. Através de um lista com as idades dos potenciais participantes, seu objetivo é fazer um programa que determine qual a idade da pessoa mais nova, dentre os que podem participar (maiores de idade).

Input Format

A entrada é um array com as idades das pessoas que tentam participar.

Constraints

A lista contém de 1 a 1000 itens

Output Format

Imprima na tela a idade da pessoa mais jovem que pode participar. Se ninguém puder participar, imprima na tela a mensagem CRESCA E APARECA.

Sample Input 0

12 18 27

Sample Output 0

18
*/

function solucao(lista) {
    let participantes = [];
    for (let idade of lista) {
        if (idade >= 18) {
            participantes.push(idade);
        }
    }

    if (participantes.length === 0) {
        console.log('CRESCA E APARECA')
    } else {
        let cacula = participantes[0];
        for (let item of participantes) {
            if (item < cacula) {
                cacula = item;
            }
        }
        console.log(cacula);
    }
}

solucao([12, 18, 27]);