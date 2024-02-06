const personaje = document.getElementById("personaje");
const contenedor = document.getElementById("contenedor");
var x = 50; // Posición inicial X
var y = 50; // Posición inicial Y


function moverPersonaje() {
    personaje.style.top = `${y}px`;
    personaje.style.left = `${x}px`;
}

function mover(direccion) {
    switch (direccion) {
        case "arriba":
            y -= 100;
            if (y < 0) y = contenedor.offsetHeight;
            break;
        case "abajo":
            y += 100;
            if (y > contenedor.offsetHeight) y = 0;
            break;
        case "izquierda":
            x -= 100;
            if (x < 0) x = contenedor.offsetWidth;
            personaje.classList.add("espejo");
            break;
        case "derecha":
            x += 100;
            if (x > contenedor.offsetWidth) x = 0;
            personaje.classList.remove("espejo");
            break;
    }
    moverPersonaje();
}
const botones = document.querySelectorAll("button");
botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        mover(boton.id);
    });
});

moverPersonaje();












