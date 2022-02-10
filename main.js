let next = 0;

function verificarBox(element) {
    icon = document.getElementById(element);

    // console.log(icon);
    // console.log(element);

    element += "Icon";
    // console.log(element);

    element = icon.querySelector("#"+element);
    // console.log(element);
    if (element !== null) {
        // console.log("MUITO BEM");
        playSong("muito_bem");
        console.log(next);
        next += 1;
        console.log(next);

    } else {
        // console.log("ERRO");
        playSong("tente_novamente");
    }
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    // console.log(ev.dataTransfer.getData());
}

function playSong(element) {
    audio = new Audio("audio/"+element+'.mpeg');
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
    if(next >= 2) {
        // console.log("teste");
        button = document.getElementById("verificar");
        
        // console.log(button);
        
        button.setAttribute("disabled", "true");
        
        button = document.getElementById("next");

        // console.log(button);
        
        button.removeAttribute("disabled");        
    }
}