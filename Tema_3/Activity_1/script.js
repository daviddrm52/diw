//Variable for the sales, at the end, i didn't used it
var sales = [{
    product: "Basketballs",
    units: 150
}, {
    product: "Baseballs",
    units: 125
}, {
    product: "Footballs",
    units: 300
}];

//Declaration for the canvas and the text
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "bold 15px Arial";
ctx.fillText("Units Sold", 10, 250);
ctx.fillText("(In 100s)", 15, 265);
ctx.fillText("Basketballs", 150, 450);
ctx.fillText("Baseballs", 300, 450);
ctx.fillText("Footballs", 450, 450);
ctx.fillText("Product", 325, 475)

// Create gradient for the basketballs
var basketball = ctx.createLinearGradient(175, 0, 225, 0);
basketball.addColorStop(0, "red");
basketball.addColorStop(1, "white");

// Fill with gradient for the basketballs
ctx.fillStyle = basketball;
ctx.fillRect(150, 275, 75, 150);

// Create gradient for the baseballs
var baseball = ctx.createLinearGradient(325, 0, 375, 0);
baseball.addColorStop(0, "turquoise");
baseball.addColorStop(1, "white");

// Fill with gradient for the baseballs
ctx.fillStyle = baseball;
ctx.fillRect(300, 325, 75, 100);

// Create gradient for the footballs
var football = ctx.createLinearGradient(475, 0, 525, 0);
football.addColorStop(0, "orange");
football.addColorStop(1, "white");

// Fill with gradient for the footballs
ctx.fillStyle = football;
ctx.fillRect(450, 125, 75, 300);

//Vertical line
ctx.moveTo(100,5);
ctx.lineTo(100,425)
ctx.stroke();

//Horizontal line
ctx.moveTo(100,425);
ctx.lineTo(590,425);
ctx.stroke();

//Top arrow (left part)
ctx.moveTo(95,10);
ctx.lineTo(100,5);
ctx.stroke();

//Top arrow (right part)
ctx.moveTo(105,10);
ctx.lineTo(100,5);
ctx.stroke();

//Bottom arrow (top part)
ctx.moveTo(585,420);
ctx.lineTo(590,425);
ctx.stroke();

//Bottom arrow (bottom part)
ctx.moveTo(585,430);
ctx.lineTo(590,425);
ctx.stroke();