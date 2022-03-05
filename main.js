var rover_width = 75;
var rover_height = 100;
var rover_x = 5;
var rover_y = 225;
var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


//Create a reference for canvas 

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	background_imagetag= new Image();
	background_imagetag.onload=uploadbackground;
	background_imagetag.src=background_image;
	
	rover_imagetag= new Image();
	rover_imagetag.onload=uploadrover;
	rover_imagetag.src=greencar_image;
	
	//upload car, and background images on the canvas.
}

function uploadbackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);

}

function uploadrover() {
	//Define function ‘uploadgreencar’.

	ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height);	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (rover_y>=0){
		rover_y-=10;
	uploadbackground();
	uploadrover();
	}	//Define function to move the car upward
}

function down()
{
	if (rover_y<=400){
        rover_y+=10;
    uploadbackground();
    uploadrover();}//Define function to move the car downward
}

function left()
{
	if (rover_x>=0){
        rover_x-=10;
    uploadbackground();
    uploadrover();
    }//Define function to move the car left side
}

function right()
{
	if (rover_x<=700){
		rover_x+=10;
	uploadbackground();
	uploadrover();
	}	//Define function to move the car right side
}
