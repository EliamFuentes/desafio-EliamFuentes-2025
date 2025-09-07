import { Utils } from "./utils.js";

const dadosAnimais = {
    Rex: { tipo: "cão", brinquedos: ["RATO", "BOLA"] },
    Mimi: { tipo: "gato", brinquedos: ["BOLA", "LASER"] },
    Fofo: { tipo: "gato", brinquedos: ["BOLA", "RATO", "LASER"] },
    Zero: { tipo: "gato", brinquedos: ["RATO", "BOLA"] },
    Bola: { tipo: "cão", brinquedos: ["CAIXA", "NOVELO"] },
    Bebe: { tipo: "cão", brinquedos: ["LASER", "RATO", "BOLA"] },
    Loco: { tipo: "jabuti", brinquedos: ["SKATE", "RATO"] },
};

class Regras {
    static processarAdocoes(p1, p2, ordem) {
        const resultado = [];
        let adotadosPessoa1 = 0;
        let adotadosPessoa2 = 0;

        const animaisAdotaveis = (brinquedosPessoa, animais) => {
            return animais.filter((animal) => {
                if (animal === "Loco") return true;
                const dados = dadosAnimais[animal];
                return Utils.contemNaOrdem(brinquedosPessoa, dados.brinquedos);
            });
        };

        for (let i = 0; i < ordem.length; i++) {
            const animal = ordem[i];
            const dados = dadosAnimais[animal];
            if (!dados) continue;

            const { tipo, brinquedos } = dados;

            let destino = "abrigo";
            let atendeP1 = Utils.contemNaOrdem(p1, brinquedos) && adotadosPessoa1 < 3;
            let atendeP2 = Utils.contemNaOrdem(p2, brinquedos) && adotadosPessoa2 < 3;

            if (animal === "Loco") {
                const restantes = ordem.slice(i + 1);
                const possiveisP1 = animaisAdotaveis(p1, restantes);
                const possiveisP2 = animaisAdotaveis(p2, restantes);

                atendeP1 = adotadosPessoa1 < 3 && possiveisP1.length > 0;
                atendeP2 = adotadosPessoa2 < 3 && possiveisP2.length > 0;
            }

            if (tipo === "gato" && atendeP1 && atendeP2) {
                destino = "abrigo";
            } else if (atendeP1 && !atendeP2) {
                destino = "pessoa 1";
                adotadosPessoa1++;
            } else if (!atendeP1 && atendeP2) {
                destino = "pessoa 2";
                adotadosPessoa2++;
            } else if (atendeP1 && atendeP2) {
                if (adotadosPessoa1 < 3) {
                    destino = "pessoa 1";
                    adotadosPessoa1++;
                } else if (adotadosPessoa2 < 3) {
                    destino = "pessoa 2";
                    adotadosPessoa2++;
                } else {
                    destino = "abrigo";
                }
            }

            resultado.push(`${animal} - ${destino}`);
        }

        return resultado.sort();
    }
}

export { Regras as Regras };
