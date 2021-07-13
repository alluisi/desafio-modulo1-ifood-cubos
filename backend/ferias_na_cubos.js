/* FÉRIAS NA CUBOS
Sara decidiu que a Cubos teve um excelente primeiro trimestre esse ano, por isso convenceu Vlad a aprovar uma viagem para todo mundo da Cubos. O destino da viagem é internacional, então todos os cúbicos precisarão ir para o aeroporto. O plano elaborado foi que todos iriam para o escritório da Cubos e então todos pegariam alguns taxis para ir ao aeroporto.

No entanto alguns cúbicos gostam muito de outros e eles rapidamente formaram grupos de 2, de 3 ou de 4 pessoas. Outros ficaram sozinhos. É imprescindível para a moral de todos que esses grupos viagem juntos.

Agora Vlad precisa saber, qual o menor número possível de taxis que precisam ser chamados sem que nenhum grupo seja quebrado em carros separados? Sabemos que em todo carro cabem 4 passageiros.

Input Format

A entrada será uma única linha (string) contendo 4 números inteiros: a quantidade de grupos com 1, com 2, com 3 e com 4 pessoas respectivamente.

Constraints

Quantidade de grupos ≤ 10^15

Output Format

Imprima o número de taxis que Vlad irá chamar.

Sample Input 0

1 1 1 1

Sample Output 0

3

Sample Input 1

2 2 2 2

Sample Output 1

5

Sample Input 2

4 0 2 3

Sample Output 2

6
*/

function processData(input) {
    const grupos = input.trim().split(" ");
    let grupoCom1 = parseInt(grupos[0]);
    let grupoCom2 = parseInt(grupos[1]);
    let grupoCom3 = parseInt(grupos[2]);
    const grupoCom4 = parseInt(grupos[3]);

    let quantosTaxis = grupoCom4 + grupoCom3;
    grupoCom1 = grupoCom1 - grupoCom3;

    if (grupoCom2 > 0) {
        if (grupoCom2 % 2 == 0) {
            quantosTaxis = quantosTaxis + (grupoCom2 / 2);
        } else {
            quantosTaxis = quantosTaxis + (((grupoCom2 - 1) / 2) + 1);
            grupoCom1 -= 2
        }
    }

    if (grupoCom1 > 0) {
        if (grupoCom1 % 4 == 0) {
            quantosTaxis = quantosTaxis + (grupoCom1 / 4);
        } else {
            quantosTaxis = quantosTaxis + ((grupoCom1 / 4) + 1);
        }
    }

    console.log(Math.floor(quantosTaxis));
}

processData("1 1 1 1");
processData("2 2 2 2");
processData("4 0 2 3");