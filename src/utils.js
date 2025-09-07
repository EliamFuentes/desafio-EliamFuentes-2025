class Utils {
    static contemNaOrdem(brinquedosPessoa, brinquedosAnimais) {
        let i = 0;
        for (const brinquedo of brinquedosPessoa) {
            if (brinquedo === brinquedosAnimais[i]) {
                i++;
            }
            if (i === brinquedosAnimais.length) break;
        }
        return i === brinquedosAnimais.length;
    }
}

export { Utils as Utils };
