/**
 * RESPONSIVE SKI.JS STARTER
 * @jD2R 2023
 */

// For responsive setup, place setup code in this function.
const setup = () => {
    smooth();
    noStroke();
    background(255);

    textAlign(CENTER, CENTER);
};
setup();

// Place all code relating to animation in this function.
draw = () => {
    clear();

    fill(0);
    textFont('Gajraj One', 50);
    text('Welcome to', width / 2, height / 2 - 55);
    textFont('Gajraj One', 115);
    text('ski.js', width / 2, height / 2 + 25);

    fill(0, 40);
    ellipse(mouseX, mouseY, 50, 50);
};

// Enables responsive viewing and smooth page resizing.
window.onresize = () => {
    size(window.innerWidth, window.innerHeight, true);
    setup();
};
