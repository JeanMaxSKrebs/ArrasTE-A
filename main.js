let next = 0;
let lastDrag;
let lastDragId;
let alerta = true;
let definicaoShadow;

function comoJogar() {
    modal = document.createElement("div");
    modal.id = "comoJogar";
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
    h1.textContent = "COMO JOGAR";
    div.appendChild(h1);

    h3 = document.createElement("h3");
    h3.textContent = "VOCÊ DEVE COLOCAR AS IMAGENS EM SUAS DEVIDAS SOMBRAS"
    div.appendChild(h3);
    h1 = document.createElement("h1");
    h1.textContent = "E"
    div.appendChild(h1);
    h3 = document.createElement("h3");
    h3.textContent = "NO QUADRADO PONTILHADO O DADO CORRESPONDENTE A PÁGINA"
    div.appendChild(h3);


    a = document.createElement("a");
    a.className = "fecharcomoJogar"
    modal.appendChild(a);
    
    button = document.createElement("button");
    button.setAttribute("onclick", "fecharcomoJogar()");
    button.textContent = "Voltar";

    a.appendChild(button);

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
    // console.log(lastDrag);

    element = ev.target.id;
    elementIcon = lastDrag;
    elementIconId = lastDragId

    console.log(element);
    console.log(elementIconId);

    if(elementIconId.indexOf("Number") == -1) {
        elementComparation = retirarLetras(elementIcon.id, 4);
        icon = true;
        number = false;
    } else {
        elementComparation = retirarLetras(elementIcon.id, 6);
        icon = false;
        number = true;
    }

    console.log(elementComparation);

    if (element == elementComparation) {

        console.log("MUITO BEM");
        playSong("muito_bem");
        // console.log(next);
        next += 1;
        // console.log(next);
        // console.log(element);
        retirarIMG(element);
        console.log(elementIcon);
        if(icon) {
            colocarICON(elementIcon);
        } else if(number) {
            colocarNumber(elementIcon);
        }

        elementIcon.setAttribute("draggable", "false");
        elementIcon.setAttribute("ondragstart", "");
    } else {

        console.log("ERRO");
        playSong("tente_novamente");

        console.log(elementIcon);
        if(icon) {
            voltarICON(elementIcon);
        } else if(number) {
            voltarNumber(elementIcon);
        }

    }
}
function retirarIMG(element) {
    // console.log(element);
    element = document.querySelector("#" + element);
    // console.log(element);

    element.parentNode.removeChild(element);
}
function colocarNumber(element) {
    console.log(element);
    divNumber = document.getElementById("divNumber");

    divNumber.appendChild(element);
}
function voltarNumber(element) {
    divInicial = document.getElementById("divInicial");

    divInicial.appendChild(element);
}
function colocarICON(element) {
    let img = element.src;
    // console.log(img);

    // console.log(element);
    divIcon = document.getElementById("divIcon");
    
    // console.log(definicaoShadow);
    
    element = definicaoShadow.cloneNode(true);
    // definicaoShadow = element.cloneNode(true);

    // console.log(element);
    // console.log(definicaoShadow);

    element.src = img;

    divIcon.appendChild(element);
    
}
function voltarICON(element) {
    divInicial = document.getElementById("divInicial");

    divInicial.appendChild(element);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    lastDrag = ev.target;
    lastDragId = ev.target.id;
    console.log(ev.target);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    // console.log(ev.dataTransfer.getData());
}

function playSong(element) {
    audio = new Audio("audio/" + element + '.mpeg');
    audio.play();
}

function verificarSong(element) {
    // console.log(element);
    element = retirarLetras(element, 4);
    // console.log(element);

    playSong(element);
}
function retirarLetras(element, qtd) {
    newElement = element.substring(0, element.length - qtd);

    return newElement;
}

function verificarNext(nextPage) {
    console.log(nextPage);
    console.log(next);

    // fazer switch case
    if (next >= 2) {
        button = document.getElementById("verificar");

        button.id = "next";
        button.textContent = "NEXT";
        button.removeAttribute("onclick");

        button.parentNode.setAttribute("href", nextPage+".html");

        alerta = false;
        playSong("muito_bem");
    } else {
        playSong("tente_novamente");
        alertar();
    }
}
function alertar() {
    if(alerta == true) {
        alert("VERIFIQUE AS RESPOSTAS PARA IR PARA A PRÓXIMA FASE");
    }
}

function shadowImage(element, x, y, cenario) {
    // console.log(cenario);
    url = "../img/"+cenario+".png";
    // console.log(url);

    cenario = document.querySelector(".cenario");
    // console.log(cenario);

    cenario.style.backgroundImage.url = "url("+url+")";

    // console.log(element);

    element = document.getElementById(element);

    // console.log(element);

    // teste // divIcon = element.parentNode;
    divIcon = element;
    console.log(divIcon);

    console.log(x, y);
    divIcon.style.position = 'absolute';
    divIcon.style.display = "block";
    divIcon.style.left = x;
    divIcon.style.top = y;

    definicaoShadow = divIcon;
}