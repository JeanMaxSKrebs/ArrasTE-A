function verificarBox(element) {
    icon = document.getElementById(element);

    console.log(icon);
    // console.log(element);

    element += "Icon";
    // console.log(element);

    element = icon.querySelector("#"+element);
    // console.log(element);
    if (element !== null) {
        console.log("MUITO BEM");
    } else {
        console.log("ERRO")
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