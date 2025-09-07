const animaisValidos = ["Rex", "Mimi", "Fofo", "Zero", "Bola", "Bebe", "Loco"];
const brinquedosValidos = ["RATO", "BOLA", "LASER", "CAIXA", "NOVELO", "SKATE"];

class Validacoes {
    static removerDuplicados(lista) {
        return new Set(lista).size === lista.length;
    }

    static animaisValidos(lista) {
        return lista.every(animal => animaisValidos.includes(animal))
    }

    static brinquedosValidos(lista) {
        return lista.every(brinquedo => brinquedosValidos.includes(brinquedo));
    }

    static validarEntradas(p1, p2, ordemAnimais) {
        if (!this.removerDuplicados(p1) || !this.removerDuplicados(p2)) return "Brinquedo inválido";
        if (!this.removerDuplicados(ordemAnimais)) return "Animal inválido";

        if (!this.animaisValidos(ordemAnimais)) return "Animal inválido";

        if (!this.brinquedosValidos(p1) || !this.brinquedosValidos(p2)) return "Brinquedo inválido";

        return null;
    }
}

export { Validacoes as Validacoes };