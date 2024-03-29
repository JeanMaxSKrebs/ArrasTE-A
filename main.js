let next = 0;
let lastDrag;
let lastDragId;
let arrayShadows = [];
let lastParent;


function comoJogar(fase) {
    modal = document.createElement("div");
    modal.id = "comoJogar";
    modal.ariaHidden = "true";

    backModal = document.createElement("backModal");
    backModal.className = "backModal";
    backModal.ariaHidden = "false";
    modal.appendChild(backModal);

    div = document.createElement("div");
    div.id = "img";
    if (fase == "inicio") {
        div.style = "background-image: url('img/comojogarregras.png');";
    } else {
        div.style = "background-image: url('../../img/comojogarregras.png');";
    }
    console.log(div);
    modal.appendChild(div);

    a = document.createElement("a");
    a.className = "fecharcomoJogar"
    a.setAttribute("onclick", "fecharcomoJogar()");
    if (fase == "inicio") {
        a.style = "background-image: url('img/fechar.png'); background-size: cover;";
    } else {
        a.style = "background-image: url('../../img/fechar.png'); background-size: cover;";
    }

    modal.appendChild(a);

    console.log(modal);
    console.log(backModal);

    modal.ariaHidden = "false";
    backModal.ariaHidden = "true";

    div = document.createElement('div');
    div.id = "videocomoJogar"
    div.setAttribute("style", "border: 25px solid black;");
    video = document.createElement("video");

    video.controls = true;
    video.height = "450";
    video.width = "740";

    source = document.createElement("source");
    a = document.createElement("a");
    a.className = "fecharvideo"
    a.setAttribute("onclick", "fecharvideo()");
    if (fase == "inicio") {
        source.src = "video/comoJogar.mp4";
        a.style = "background-image: url('img/fechar.png'); background-size: cover;";

    } else if (fase == "fazenda") {
        source.src = "../../video/comoJogarfazenda.mp4";
        a.style = "background-image: url('../../img/fechar.png'); background-size: cover;";

    } else if (fase == "cores") {
        source.src = "../../video/comoJogarcores.mp4";
        a.style = "background-image: url('../../img/fechar.png'); background-size: cover;";

    } else if (fase == "frutas") {
        source.src = "../../video/comoJogarfruta.mp4";
        a.style = "background-image: url('../../img/fechar.png'); background-size: cover;";

    } else {
        source.src = "../../video/comoJogar.mp4";
        a.style = "background-image: url('../../img/fechar.png'); background-size: cover;";
    }
    source.type = "video/mp4";

    // console.log(div);
    // console.log(source);


    // modal.appendChild(a);

    div.appendChild(a);
    video.appendChild(source);
    div.appendChild(video);
    modal.appendChild(div);

    document.body.appendChild(modal);
}

function fecharvideo() {
    div = document.getElementById("videocomoJogar");
    console.log(div);
    div.parentNode.removeChild(div);
}

function fecharcomoJogar() {
    modal = document.getElementById("comoJogar");

    modal.parentNode.removeChild(modal);
}

function verificarBox(ev) {
    //mostra elemento que vai ser colocado
    // console.log(ev.path[1]);
    //ultimo elemento clicado
    // console.log(lastDrag);

    elementId = ev.target.id;
    element = lastDrag;

    //drag
    // console.log(element);
    //drop
    // console.log(elementId);
    //dragId
    // console.log(lastDragId);

    if (lastDragId.indexOf("Number") >= 0) {

        elementComparation = retirarLetras(element.id, 6);
        img = false;
        number = true;
        cor = false;

    } else if (lastDragId.indexOf("Img") >= 0) {
        elementComparation = retirarLetras(element.id, 3);
        img = true;
        number = false;
        cor = false;

    } else if (lastDragId.indexOf("cor") >= 0) {
        elementComparation = retirarLetras(element.id, 3);
        img = false;
        number = false;
        cor = true;
    }

    // console.log(cor)
    console.log(element);
    console.log(elementId);
    console.log(elementComparation);
    if (cor) {

        verificar = bancodedados(elementComparation, elementId)

        console.log(verificar);
        if (verificar) {
            elementId = elementComparation

            pintarIMG(verificar, ev.composedPath()[0]);
        }

    }
    if (elementId == elementComparation) {

        // console.log("MUITO BEM");
        playSong("muito_bem.mpeg");
        // console.log(next);
        next += 1;
        // console.log(next);
        // console.log(element);
        // console.log(elementId);
        hiddenIMG(element);
        // retirarIMG(elementId);

        if (img) {
            mudarIMG(element, ev.composedPath()[0]);
        } else if (number) {
            colocarNumber(element);
        }
        element.setAttribute("draggable", "false");
        // console.log(element);

    } else {

        // console.log("ERRO");
        playSong("tente_novamente.mpeg");


        // console.log(element);
        // console.log(lastParent);

        // if (img) {
        //     voltarImg(element, lastParent);
        // } else if (number) {
        //     voltarNumber(element);
        // }

    }
}

function hiddenIMG(element) {
    console.log(element);

    element.style = "visibility: hidden"
}

// function retirarIMG(element) {
//     console.log(element);
//     element = document.querySelector("#" + element);

//     element.parentNode.removeChild(element);
// }

function colocarNumber(element) {
    console.log(element);
    divNumber = document.getElementById("divNumber");

    divNumber.appendChild(element);
}

function voltarNumber(element) {
    divInicial = document.getElementById("divInicial");

    divInicial.appendChild(element);
}

function mudarIMG(element, position) {

    // console.log(position);

    let img = element.src;
    // console.log(img);

    position.src = img;
    position.setAttribute("draggable", "false");
}
function pintarIMG(nome, position) {

    console.log(nome)


    position.src = "../../img/" + nome + ".png";
    position.setAttribute("draggable", "false");
}


function voltarImg(element, parent) {
    console.log(parent);
    position = document.getElementById(parent.id);
    console.log(element);
    console.log(position);
    position.appendChild(element);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    lastDrag = ev.target;
    lastDragId = ev.target.id;

    // console.log(ev.target);
}
function changeCursor(id) {
    document.getElementById(id).style.cursor = "url('../../img/cursores/aulaagarra.png'), auto";
    // console.log(document.querySelector('body'));
    // body = document.querySelector('body')
    // body.setAttribute("style", "cursor: url('../../img/cursores/aulaagarra.png'), auto");
    // console.log(body);
    // setAttribute("cursor", "url('../img/cursores/aula.png'), auto;");
}
function drop(ev) {
    // debugger;

    lastParent = lastDrag.parentNode;
    console.log(lastDrag);
    console.log(lastParent);

    ev.preventDefault();
    // var data = ev.dataTransfer.getData("text");
    // ev.target.appendChild(document.getElementById(data));
    // console.log(ev.dataTransfer.getData(data));
}

//usado para sons no carregados antes da pagina

function playSong(element) {
    // console.log(element);

    audio = new Audio("../../audio/" + element);

    // console.log(audio);
    audio.play()
        .then(() => {
            // Audio is playing.
            console.log("tocando");
        })
        .catch(error => {
            console.log(error);
        });
}

function verificarSong(element, letrasRetirar, fase, tipo, letrasRetirarAntes) {

    element = retirarLetras(element, letrasRetirar);
    console.log(element);
    element = retirarLetrasAntes(element, letrasRetirarAntes);
    console.log(element);

    if (tipo == 'mpeg') {
        element = element + '.mpeg';
    } else if (tipo == 'mp3') {
        element = element + '.mp3';
    } else if (tipo == 'wav') {
        element = element + '.wav';
    } else {
        element = element + '.mpeg';
    }
    console.log(element);
    if (fase) {
        element = fase + "/" + element;
    }
    
    console.log(element);
    // exceçoes

    playSong(element);
}
function retirarLetras(element, qtd) {
    newElement = element.substring(0, element.length - qtd);

    return newElement;
}
function retirarLetrasAntes(element, qtd) {
    newElement = element.substring(qtd, element.length);

    return newElement;
}

function verificarNext(nextPage, valor) {
    // console.log(nextPage);
    // console.log(next);
    // console.log(valor);

    if (next >= valor)
        proximaFase(nextPage);

}

async function proximaFase(nextPage) {

    if (nextPage == "fases") {
        // debugger;
        window.location.href = "../../" + nextPage + ".html";

    } else if(nextPage == "final") {
        window.location.href = "../../" + nextPage + ".html";
    }

    await sleep(1500);
    window.location.href = nextPage + ".html";

}

async function carregamento(fases) {

    div = document.createElement("div");
    div.textAlign = "center";
    div.style.position = "fixed";

    carregamento = document.createElement("img");
    carregamento.margin = "auto";
    carregamento.display = "block";
    carregamento.style.width = "600px";
    carregamento.style.height = "150px";
    carregamento.src = "../../img/carregando0.png";

    div.style.left = '50%';
    div.style.top = '50%';
    div.style.marginLeft = "-325px"
    div.style.marginTop = "-75px";

    // console.log(carregamento);
    for (let i = 1; i <= 4; i++) {
        // console.log(carregamento);
        // console.log(i);
        if (fases)
            carregamento.src = "./img/carregando" + i + ".png";
        else
            carregamento.src = "../../img/carregando" + i + ".png";

        await sleep(200);
        div.appendChild(carregamento);
        document.body.appendChild(div);
    }
    div.parentNode.removeChild(div);

    // console.log(div);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



function shadowImage(element, x, y, cenario) {
    // console.log(cenario);
    url = ".../../img/" + cenario + ".png";
    // console.log(url);

    cenario = document.querySelector(".cenario");
    // console.log(cenario);

    cenario.style.backgroundImage.url = "url(" + url + ")";

    console.log(element);
    let definicaoShadow = new Object();
    definicaoShadow.id = element;

    divImg = document.getElementById(element);

    console.log(divImg);

    console.log(x, y);
    divImg.style.position = 'absolute';
    divImg.style.display = "block";
    divImg.style.left = x;
    divImg.style.top = y;

    definicaoShadow.x = x;
    definicaoShadow.y = y;

    definicaoShadow = divImg;

    arrayShadows.push(definicaoShadow);

    // console.log(definicaoShadow);
    // console.log(arrayShadows);
}