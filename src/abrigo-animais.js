import { Validacoes } from "./validacoes.js";
import { Regras } from "./regras.js";

class AbrigoAnimais {
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const p1 = brinquedosPessoa1.split(",");
    const p2 = brinquedosPessoa2.split(",");
    const ordem = ordemAnimais.split(",");

    const erro = Validacoes.validarEntradas(p1, p2, ordem);
    if (erro) return { erro };

    const resultado = Regras.processarAdocoes(p1, p2, ordem);

    return { lista: resultado };
  }
}

export { AbrigoAnimais as AbrigoAnimais };
