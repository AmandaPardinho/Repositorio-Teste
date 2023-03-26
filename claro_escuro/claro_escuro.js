function toggleMode(){
    var link = document.getElementsByTagName("link")[1];
    var currentMode = link.getAttribute("href");

    if(currentMode == "claro.css"){
        link.setAttribute("href", "escuro.css");
    }else{
        link.setAttribute("href", "claro.css");
    }
}