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

    document.body.appendChild(modal);
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
    } else if (lastDragId.indexOf("Img") >= 0) {
        elementComparation = retirarLetras(element.id, 3);
        img = true;
        number = false;
    }

    // console.log(element);
    // console.log(elementId);
    // console.log(elementComparation);

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

function verificarSong(element, letrasRetirar, tipo) {

    element = retirarLetras(element, letrasRetirar);

    if (tipo == 'mpeg') {
        element = element + 'Song.mpeg';
    } else if (tipo == 'mp3') {
        element = element + 'Song.mp3';
    } else if (tipo == 'wav') {
        element = element + 'Song.wav';
    } else {
        element = element + '.mpeg';
    }
    console.log(element);
    // exceçoes

    playSong(element);
}
function retirarLetras(element, qtd) {
    newElement = element.substring(0, element.length - qtd);

    return newElement;
}

function verificarNext(nextPage, valor) {
    console.log(nextPage);
    // console.log(next);
    console.log(valor);

    if (next >= valor)
        proximaFase(nextPage);

}

async function proximaFase(nextPage) {
    
    if (nextPage == "fases") {
        // debugger;
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
        if(fases)
            carregamento.src = "./img/carregando" + i + ".png";
        else
            carregamento.src = "../../img/carregando" + i + ".png";

        await sleep(500);
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

function pause() {
    modal = document.createElement("div");
    modal.id = "pause";
    modal.ariaHidden = "true";

    backModal = document.createElement("backModal");
    backModal.className = "backModal";
    backModal.ariaHidden = "false";
    modal.appendChild(backModal);

    div = document.createElement("div");
    modal.appendChild(div);

    h1 = document.createElement("h1");
    h1.color = "#fff";
    h1.style.textDecoration = "underline";
    h1.textContent = "PAUSE";
    div.appendChild(h1);

    h3 = document.createElement("h3");
    h3.textContent = "insira o texto aqui"
    div.appendChild(h3);
    br = document.createElement("br");
    div.appendChild(br);
    br = document.createElement("br");
    div.appendChild(br);

    a = document.createElement("a");
    a.className = "buttonFases"
    div.appendChild(a);
    a.setAttribute("href", "fases.html");

    h2 = document.createElement("h2");
    h2.textContent = "FASES"
    a.appendChild(h2);

    a = document.createElement("a");
    a.className = "fecharpause"
    modal.appendChild(a);

    button = document.createElement("button");
    button.setAttribute("onclick", "fecharpause()");
    button.textContent = "Voltar";

    a.appendChild(button);

    console.log(modal);
    console.log(backModal);

    modal.ariaHidden = "false";
    backModal.ariaHidden = "true";

    document.body.appendChild(modal);
}

function fecharpause() {
    modal = document.getElementById("pause");

    modal.parentNode.removeChild(modal);
}