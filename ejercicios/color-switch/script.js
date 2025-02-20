function randomColor() {

    let color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    document.documentElement.style.setProperty('--color-fondo', color);
}