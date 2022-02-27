const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");

// Dimensions for the image
const width = 1200;
const height = 627;

// Instantiate the canvas object
const canvas = createCanvas(width, height);
const context = canvas.getContext("2d");


async function drawMain() {
    createCircle(300, 300, "yellow", 100)
    createCircle(250, 250, "blue", 5)
    createCircle(350, 250, "blue", 5)
    
    
    drawCurve(250, 300, 50, 100, "blue")
    await addImage(400, 150, "./images/hihand.png", 100, 100);

    addText(750, 320, "Please allow me to do this project! I need this", "white");
    
    
    // Write the image to file
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync("./images/image.png", buffer);
}
drawMain();



function createCircle(x, y, color, radi) {
    context.beginPath()
    context.arc(x,y,radi,0,Math.PI*2, false);
    context.fillStyle = color
    context.fill();
}

function drawCurve(x, y, curveHeight, curveWidth, color) {
    context.beginPath();
    context.moveTo(x, y);
    context.bezierCurveTo(x, y, x+curveHeight, y+curveHeight, x+curveWidth, y);
    context.strokeStyle = color;
    context.stroke();
}

async function addImage(x, y, imagePath, width, height) {
    var image = await loadImage(imagePath);
    console.log(image)
    context.drawImage(image,  x, y, image.width / 4, image.height / 4);
}

function addText(x, y, content, color) {
    context.fillStyle = color;
    context.textAlign = 'center';

    context.font = "30px Arial"
    context.fillText(content, x, y);
}
