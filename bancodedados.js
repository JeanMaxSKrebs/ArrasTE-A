function bancodedados(cor, valor) {
    retorno = '';
    console.log(cor)
    console.log(valor)
    switch (cor) {
        case "baldevermelho":
            switch (valor) {
                case "melanciasemcascasemcor":
                    retorno = 'melanciasemcasca';
                    break;
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
                case "bananasemcor":
                    retorno = 'banana';
                    break;
                case "cuboamarelo":
                    retorno = 'cuboamarelo';
                    break;

                default:
                    break;
            }
            break;

        case "baldelaranja":
            switch (valor) {
                case "laranjasemcor":
                    retorno = 'laranja';
                    break;
                case "cubolaranja":
                    retorno = 'cubolaranja';
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
                case "melanciasemcor":
                    retorno = 'melancia';
                    break;
                case "kiwisemcascasemcor":
                    retorno = 'kiwisemcasca';
                    break;
                case "alfacesemcor":
                    retorno = 'alface';
                    break;
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

        case "balderoxo":
            switch (valor) {
                case "uvasemcor":
                    retorno = 'uva';
                    break;
                case "cuboroxo":
                    retorno = 'cuboroxo';
                    break;

                default:
                    break;
            }
            break;

        case "baldemarrom":
            switch (valor) {
                case "cocosemcor":
                    retorno = 'coco';
                    break;
                case "kiwicomcascasemcor":
                    retorno = 'kiwicomcasca';
                    break;
                case "cubomarrom":
                    retorno = 'cubomarrom';
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