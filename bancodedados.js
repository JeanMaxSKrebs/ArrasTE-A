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
                case "cubovermelho":
                    retorno = 'cubovermelho';
                    break;

                default:
                    break;
            }
            break;

        case "baldeazul":
            switch (valor) {
                case "cuboazul":
                    retorno = 'cuboazul';
                    break;

                default:
                    break;
            }

            break;

        case "baldeamarelo":
            switch (valor) {
                case "cuboamarelo":
                    retorno = 'cuboamarelo';
                    break;

                default:
                    break;
            }
            break;


        case "baldepreto":
            switch (valor) {
                case "cubopreto":
                    retorno = 'cubopreto';
                    break;

                default:
                    break;
            }
            break;

        case "baldeverde":
            switch (valor) {
                case "cuboverde":
                    retorno = 'cuboverde';
                    break;

                default:
                    break;
            }
            break;

        case "balderosa":
            switch (valor) {
                case "cuborosa":
                    retorno = 'cuborosa';
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