function bancodedados(cor, valor) {
    retorno = '';
    console.log(cor)
    console.log(valor)
    switch (cor) {
        case "baldevermelho":
            switch (valor) {
                case "macasemcor":
                    retorno = 'maca';
                    break;

                default:
                    break;
            }
            break;

        case "baldeazul":
            switch (valor) {
                case "":
                    break;

                default:
                    break;
            }



            break;

        default:
            break;
    }

    return retorno;

}