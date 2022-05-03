function bold(){
document.getElementById("doc").style.fontWeight = "bold";
}
function italic(){
    document.getElementById("doc").style.fontWeight = "italic";
}
function leftAlign(){
    document.getElementById("doc").style.textAlign = "left";
}
function rightAlign(){
    document.getElementById("doc").style.textAlign = "right";
}
function centerAlign(){
    document.getElementById("doc").style.textAlign = "center";
}
function clear(){
    console.log("I was clicked");
    document.getElementById("doc").style.fontWeight = "normal";
    document.getElementById("doc").style.textAlign = "left";
    document.getElementById("doc").style.fontStyle = "normal";
    document.getElementById("doc").value = "";
}

