canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

canvas_bg_images=["Mars_nasa_1.jpeg","Mars_nasa_2.jpg","Mars_nasa_3.jpg","Mars_nasa_4.jpg"];
random_number= Math.floor(Math.random()*4);

rover_width= 80;
rover_height= 60;

rover_x= 20;
rover_y= 500;

background_image=canvas_bg_images[random_number];
rover_image="rover.png";


function add(){
    canvas_background= new Image();
    canvas_background.onload=upload_canvas_bg;
    canvas_background.src= background_image;

    canvas_rover= new Image();
    canvas_rover.onload=upload_canvas_rover;
    canvas_rover.src= rover_image;
}

function upload_canvas_bg(){
    ctx.drawImage(canvas_background,0,0, canvas.width, canvas.height);

}

function upload_canvas_rover(){
    ctx.drawImage(canvas_rover,rover_x,rover_y, rover_width, rover_height);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    key_pressed= e.keyCode;
    console.log(key_pressed)

    if (key_pressed== "37"){
        left();
        console.log("left key has been pressed");
    }

    if (key_pressed== "38"){
        up();
        console.log("up key has been pressed");
    }

    if (key_pressed== "39"){
        right();
        console.log("right key has been pressed");
    }

    if (key_pressed== "40"){
        down();
        console.log("down key has been pressed");
    }

}

function up(){
if (rover_y>=5){
    rover_y= rover_y-10;
upload_canvas_bg();
upload_canvas_rover();
console.log(rover_y);
}
}

function down(){
if (rover_y<=500){
    rover_y= rover_y+10;
    upload_canvas_bg();
    upload_canvas_rover();
    
}
}

function left(){
if (rover_x>=5){
    rover_x= rover_x-10;
    upload_canvas_bg();
    upload_canvas_rover();    
}
}

function right(){
if (rover_x<=700){
    rover_x= rover_x+10;
    upload_canvas_bg();
    upload_canvas_rover();
}
}
