var color = "black";
var width_of_line = "4";
var radius = "40";
var mouseEvent;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);
canvas.addEventListener("mouseup",my_mouseup);
canvas.addEventListener("mouseleave",my_mouseleave);
canvas.addEventListener("mousemove",my_mousemove);


function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
    console.log(mouseEvent);
}

function my_mouseup(e) {
    mouseEvent = "mouseup";
    console.log(mouseEvent);
}

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
    console.log(mouseEvent);
}

function my_mousemove(e) {
    var cur_pos_x = e.clientX;
    var cur_pos_y = e.clientY;
    mouseEvent = "mousemove";

    if(mouseEvent == "mousemove") {
        console.log("Current X = "+cur_pos_x+", Current Y = "+cur_pos_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(cur_pos_x-350,cur_pos_y,radius,0,2*Math.PI);
        ctx.stroke();
    }

    mouseEvent = "mousemove";
    console.log(mouseEvent);
}