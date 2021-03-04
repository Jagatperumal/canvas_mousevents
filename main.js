var mouse_event="empty";
var last_position_of_x,last_position_of_y;
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
color="black";
width=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
width=document.getElementById("width").value;
mouse_event="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouse_event="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouse_event="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_position_of_x=e.clientX-canvas.offsetLeft;
current_position_of_y=e.clientY-canvas.offsetTop;
if(mouse_event=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
console.log("last position of x&y are");
console.log("x="+last_position_of_x+"y="+last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);
console.log("current position of x&y are");
console.log("x="+current_position_of_x+"y="+current_position_of_y);
ctx.lineTo(current_position_of_x,current_position_of_y);
ctx.stroke();


}
last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;
}
function clear_area(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
