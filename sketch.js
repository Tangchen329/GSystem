//function setup(){
//createCanvas(800,600);
//background(0);

//}

//function draw(){
//let xx = random(width);
//let yy = random(height);
//let rr = (10,50);
//fill(random(255));
//noStroke;
//ellipse(xx,yy,rr,rr);


//}
//colorMode(RGB,255);
var steps=200;
var colornum = 3;
var startR = 300;//启始圆的半径 *
var endR =50;//终止圆的半径
var startX = 400;//让启始圆横向距离画布边缘空开20
var startY = 500;//让启始圆纵向上距离画布20-200之间
var endX = 400;//终点圆横向上距离边缘20
var endY = 200;//


function setup() {
	 
  createCanvas(800, 800);
}

function draw() {
  background(255);
	fill(0);
  if(mousePressed ){drawGradient();}
    
  //}
	
}



function drawGradient(){
	var intervalX = (endX - startX)/steps;//每个圆的横坐标
	var intervalY = (endY - startY)/steps;//每个圆的纵坐标
	var intervalR = (endR - startR)/steps;//每个圆的半径
	
	var gradientcolor=[];
	colorMode(RGB,255);
	var from =color(random(255),random(255),random(255));
	var to =color(random(255),random(255),random(255));
	
	for(var i=0;i<steps-2;i++){
		gradientcolor[i] = lerpColor(from, to, i/(steps-2));
}
	
	fill(from);
	ellipse(startX, startY , startR , startR );
  for(var i=1;i<steps;i++){
	noStroke(); 
	fill(gradientcolor[i]);
	ellipse(startX + intervalX * i, startY + intervalY * i, startR + intervalR * i, startR + intervalR * i);//画所有圆
  }
	noStroke();
	fill(to);
	ellipse(endX, endY , endR , endR );
}

function mousePressed(){

   drawGradient();}





