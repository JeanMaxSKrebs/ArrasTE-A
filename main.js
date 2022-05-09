let next = 0;
let lastDrag;
let lastDragId;
let alerta = true;
let arrayShadows = [];


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
    console.log(lastDrag);

    elementId = ev.target.id;
    element = lastDrag;
    elementIconId = lastDragId

    console.log(elementId);
    console.log(element);

    if (elementIconId.indexOf("Number") >= 0) {

        elementComparation = retirarLetras(element.id, 6);
        icon = false;
        number = true;
    } else if (elementIconId.indexOf("Icon") >= 0) {
        elementComparation = retirarLetras(element.id, 4);
        icon = true;
        number = false;
    } else {
        elementComparation = retirarLetras(element.id, 3);
        icon = false;
        number = false;
    }
    element.setAttribute("style", "font-size: calc(4vw + 4vh)");
    console.log(element);
    console.log(elementComparation);

    if (elementId == elementComparation) {

        console.log("MUITO BEM");
        playSong("muito_bem.mpeg");
        // console.log(next);
        next += 1;
        console.log(next);
        console.log(element);
        console.log(elementId);

        retirarIMG(elementId);

        if (icon) {
            colocarICON(element);
        } else if (number) {
            colocarNumber(element);
        } else {
            colocarImg(element, elementId);
        }
        element.setAttribute("draggable", "false");
        // console.log(element);
    } else {

        console.log("ERRO");
        playSong("tente_novamente");

        console.log(element);
        if (icon) {
            voltarICON(element);
        } else if (number) {
            voltarNumber(element);
        } else {
            voltarImg(element);
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

function colocarImg(element, elementId) {
    let img = element.src;
    // console.log(img);

    divIcon = document.getElementById("divIcon");
    // console.log(elementId)
    // console.log(element); // passando tag img
    // console.log(divIcon); // passando div

    for (let index = 0; index < arrayShadows.length; index++) {
        
        console.log(arrayShadows[index]);
        const e = arrayShadows[index].id;
        console.log(e);
        
        if (e == elementId) {
            element = arrayShadows[index].cloneNode(true);
            
            // console.log(element);
            // console.log(divIcon);
            
            element.setAttribute("height", "100px");
            element.src = img;

        }
    }
    divIcon.appendChild(element);

}
function voltarImg(element) {
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
    // console.log(ev.target);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    // console.log(ev.dataTransfer.getData(data));
}

function playSong(element) {
    console.log(element);
    
    audio = new Audio("audio/" + element);
  
    console.log(audio);
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

    if(tipo == 'mpeg') {
        element = element + 'Song.mpeg';
    } else if(tipo == 'mp3'){
        element = element + 'Song.mp3';
    } else  if(tipo == 'wav'){
        element = element + 'Song.wav';
    } else{
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
    console.log(next);

    if (next >= valor) {
        button = document.getElementById("verificar");

        button.id = "next";
        button.textContent = "NEXT";
        button.removeAttribute("onclick");

        button.parentNode.setAttribute("href", nextPage + ".html");

        alerta = false;
        playSong("muito_bem.mpeg");
    } else {
        playSong("tente_novamente");
        alertar();
    }
}
function alertar() {
    if (alerta == true) {
        alert("VERIFIQUE AS RESPOSTAS PARA IR PARA A PRÓXIMA FASE");
    }
}

function shadowImage(element, x, y, cenario) {
    // console.log(cenario);
    url = "../img/" + cenario + ".png";
    // console.log(url);

    cenario = document.querySelector(".cenario");
    // console.log(cenario);

    cenario.style.backgroundImage.url = "url(" + url + ")";

    console.log(element);
    let definicaoShadow = new Object();
    definicaoShadow.id = element;

    divIcon = document.getElementById(element);

    console.log(divIcon);

    console.log(x, y);
    divIcon.style.position = 'absolute';
    divIcon.style.display = "block";
    divIcon.style.left = x;
    divIcon.style.top = y;

    definicaoShadow.x = x;
    definicaoShadow.y = y;

    definicaoShadow = divIcon;

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