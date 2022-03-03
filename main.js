let next = 0;
let lastDrag;
let lastDragId;
let alerta = true;

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
    console.log(element);
    divIcon = document.getElementById("divIcon");

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

function verificarNext() {
    console.log(next);
    if (next >= 2) {
        // console.log("teste");
        button = document.getElementById("verificar");

        // console.log(button);

        button.setAttribute("disabled", "true");

        button = document.getElementById("next");

        // console.log(button);

        button.removeAttribute("disabled");
        alerta = false;
    } else {
        alertar();
    }
}
function alertar() {
    if(alerta == true)
        alert("VERIFIQUE AS RESPOSTAS PARA IR PARA A PRÓXIMA FASE");
}