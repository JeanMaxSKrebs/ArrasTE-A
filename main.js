let next = 0;
let lastDrag;
let lastDragId;

function verificarBox(ev) {
    // console.log(lastDrag);

    element = ev.target.id;
    elementIcon = lastDrag;

    console.log(element);
    console.log(elementIcon.id);

    elementComparation = retirarLetras(elementIcon.id, 4);

    // console.log(elementComparation);

    if (element == elementComparation) {

        console.log("MUITO BEM");
        playSong("muito_bem");
        // console.log(next);
        next += 1;
        // console.log(next);
        // console.log(element);
        retirarIMG(element);
        colocarICON(elementIcon);

        elementIcon.setAttribute("draggable", "false");
        elementIcon.setAttribute("ondragstart", "");
    } else {

        console.log("ERRO");
        playSong("tente_novamente");
        console.log(elementIcon);
        voltarICON(elementIcon);

    }
}
function retirarIMG(element) {
    // console.log(element);
    element = document.querySelector("#" + element);
    // console.log(element);

    element.parentNode.removeChild(element);
}
function colocarICON(element) {
    console.log(element);

    divIcon.appendChild(element);
}
function voltarICON(element) {
    divIcon = document.getElementById("divInicial");

    divIcon.appendChild(element);
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

function mouseOver(element) {
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
    }
}