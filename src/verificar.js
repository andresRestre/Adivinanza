import React from "react";


function verificar() {
    let randyNum = (Math.floor(Math.random() * 11))
    let num = document.getElementById("numerin").value

    if (num == randyNum) {
        alert("Ganaste el numero era: " + [randyNum])
    }
    else {
        alert("Perdiste el numero era: " + [randyNum])
    }
}

export default verificar;