/* CONTADOR DE PALAVRAS
Todo bom editor de texto informa no rodapé do programa quantas palavras tem no texto. Você está trabalhando numa empresa que está desenvolvendo um editor de texto e ficou com a tarefa de desenvolver esta funcionalidade. Para o texto dado na entrada, imprima na tela quantas palavras existem neste texto.

Input Format

A entrada será sempre um texto qualquer

Constraints

A entrada será sempre um texto qualquer com no máximo 5000 caracteres.

Output Format

Imprima na tela a quantidade de palavras contidas no texto.

Sample Input 0

Um texto qualquer

Sample Output 0

3

Sample Input 1

Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer

Sample Output 1

14
*/

function solucao(texto) {
    let semEspaco = texto.trim().split(" ");
    let contagem = 0;
    for (let item of semEspaco) {
        if (item !== "") {
            contagem++
        }
    }
    console.log(contagem);
}

solucao("Um texto qualquer");
solucao("Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer ");