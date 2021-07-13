/* DISTÂNCIA MÁXIMA
Thacila está preocupada com as condições de trabalho em nosso ambiente cúbico, em especial com o quanto as pessoas precisam andar dentro da sala. Também é comum na Cubos que uma pessoa tire dúvidas com outra indo até a mesa do colega, caminhando a distância. Ela está fazendo um trabalho de realocar as mesas da sala para que as pessoas precisem andar o mínimo possível. Para tal, ela precisa primeiro rever a posição atual e determinar qual é a maior distância que precisa ser andada para uma pessoa chegar na mesa do colega. Como o número de pessoas está ficando bem grande, ela precisa escrever um programa para isso. Considere que cada pessoa é um ponto no plano euclidiano e que a distância é sempre uma linha reta entre dois pontos.

Input Format

Neste problema a entranda é um único string que você deve tratar adequadamente para obter as informações que você precisa em variáveis separadas.

A primeira linha deste string será o inteiro N que indica o número de funcionários da Cubos. Nas próximas N linhas você lerá dois números, as coordenadas X e Y do i-ésimo funcionário.

Constraints

2 ≤ N ≤ 10^3 -1000 ≤ X, Y ≤ 1000

Output Format

Imprima um único número, a resposta para o problema.

Sample Input 0

3
0 0
0 3
4 0

Sample Output 0

5.0

Sample Input 1

5
3.56 17
-5.1 36.3
0.0002 -2
5 5
-9.01 -17.7

Sample Output 1

54.141371427033505
*/

function processData(input) {
    const linhas = input.trim().split("\n");
    const n = parseFloat(linhas[0]);
    const coodenadas = [];

    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(" ");
        coodenadas.push({
            x: parseFloat(coord[0]),
            y: parseFloat(coord[1])
        });
    }

    let distancia = 0;
    let euclidiana = 0
    for (let i = 0; i < coodenadas.length; i++) {
        for (let j = 1; j < coodenadas.length; j++) {
            euclidiana = Math.sqrt(Math.pow((coodenadas[i].x - coodenadas[j].x), 2) + Math.pow((coodenadas[i].y - coodenadas[j].y), 2));
            if (euclidiana > distancia) {
                distancia = euclidiana;
            }
        }
    }
    console.log(distancia);
}

processData("3\n0 0\n0 3\n4 0");
processData("5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7")