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