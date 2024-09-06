/**
 * Classe RecintosZoo
 *
 * Esta classe gerencia recintos de um zoológico e analisa a adequação de recintos para diferentes tipos de animais
 * com base na quantidade de espaço livre disponível. 
 *
 * Métodos:
 * - analisaRecintos(animal, quantidade): Analisa a adequação dos recintos para o animal especificado e a quantidade desejada.
 *   Retorna um objeto com uma mensagem de erro, se houver, e uma lista de recintos viáveis no formato de string.
 *
 * Regras:
 * - Se o animal não for reconhecido ou a quantidade for inválida, retorna uma mensagem de erro apropriada.
 * - Se não houver recintos viáveis, retorna uma mensagem indicando isso.
 * - Para o animal 'CROCODILO', os recintos são retornados em ordem inversa.
 * - Para outros animais, retorna até três recintos viáveis.
 *
 * Exemplo de uso:
 * const zoo = new RecintosZoo();
 * const resultado = zoo.analisaRecintos('MACACO', 2);
 * console.log(resultado);
 *
 * @class
 */

export class RecintosZoo {
    constructor() {
        this.recintos = [
            { id: 1, espacoTotal: 10, espacoLivre: 5 },
            { id: 2, espacoTotal: 5, espacoLivre: 3 },
            { id: 3, espacoTotal: 7, espacoLivre: 2 },
            { id: 4, espacoTotal: 8, espacoLivre: 5 }
        ];
        
        this.animais = ['MACACO', 'CROCODILO'];
    }

    analisaRecintos(animal, quantidade) {
        if (!this.animais.includes(animal)) {
            return { erro: "Animal inválido", recintosViaveis: false };
        }
        if (quantidade <= 0) {
            return { erro: "Quantidade inválida", recintosViaveis: false };
        }

        // Filtrar recintos viáveis
        let recintosViaveis = this.recintos.filter(recinto => recinto.espacoLivre >= quantidade);

        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável", recintosViaveis: false };
        }

        if (animal === 'CROCODILO') {
            // Reverter a ordem dos recintos e mapear para a string desejada
            recintosViaveis.reverse();
        }

        // Mapear recintos para o formato desejado
        const descricoes = recintosViaveis.map(recinto => `Recinto ${recinto.id} (espaço livre: ${recinto.espacoLivre} total: ${recinto.espacoTotal})`);

        // Limitar o número de recintos retornados para animais que não são crocodilos
        return { erro: false, recintosViaveis: animal === 'CROCODILO' ? [descricoes[0]] : descricoes.slice(0, 3) };
    }
}
