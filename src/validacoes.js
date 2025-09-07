const animaisValidos = ["Rex", "Mimi", "Fofo", "Zero", "Bola", "Bebe", "Loco"];
const brinquedosValidos = ["RATO", "BOLA", "LASER", "CAIXA", "NOVELO", "SKATE"];

class Validacoes {
    static semDuplicatas(lista) {
        return new Set(lista).size === lista.length;
    }

    static animaisValidos(lista) {
        return lista.every(animal => animaisValidos.includes(animal))
    }

    static brinquedosValidos(lista) {
        return lista.every(brinquedo => brinquedosValidos.includes(brinquedo));
    }

    static validarEntradas(p1, p2, ordemAnimais) {
        // Duplicatas nas listas individuais
        if (!this.semDuplicatas(p1) || !this.semDuplicatas(p2)) return "Brinquedo inválido";
        if (!this.semDuplicatas(ordemAnimais)) return "Animal inválido";

        // Validar animais
        if (!this.animaisValidos(ordemAnimais)) return "Animal inválido";

        // Validar brinquedos
        if (!this.brinquedosValidos(p1) || !this.brinquedosValidos(p2)) return "Brinquedo inválido";

        return null; // Nenhum erro
    }
}

export { Validacoes as Validacoes };