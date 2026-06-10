let sections = document.getElementsByTagName('section');
let hr_lista = document.getElementsByTagName("hr");

let status_dark_mode = false;
let imgBotao = document.getElementById("imgBotao");

let btnModoEscuro = document.getElementById('btnModoEscuro');

function darkMode(){
    document.body.classList.toggle("dark-mode");

    for(section of sections){
        section.classList.toggle("section-dark")
    }

    for(hr of hr_lista){
        hr.classList.toggle("hr-dark")
    }

    status_dark_mode = !status_dark_mode

    if(document.body.classList.contains("dark-mode")){
        imgBotao.classList.toggle("img-rotacionar");
        imgBotao.src = "IMG/clear_mode.png"
    } else{
        imgBotao.classList.toggle("img-rotacionar");
        imgBotao.src = "IMG/dark_mode.png"
    }
}

btnModoEscuro.addEventListener("click", darkMode);