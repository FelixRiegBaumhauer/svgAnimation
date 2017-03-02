//globals
var rid = 0;
var size = 1;
var growing = true;//false for shrinking


//fxns
var animateCircle = function(){    
    window.cancelAnimationFrame(rid);
    var center_circle = function(){
	clear_svg();
	console.log("circle");

	var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
	c.setAttribute("cx", "250");
	c.setAttribute("cy", "250");
	c.setAttribute("r", size);
	c.setAttribute("fill", "magenta");

	document.getElementById("vimage").appendChild(c);
	
	if(growing == true){
	    size+=1;
	}
	else{    
	    size-=1;
	}
	
	if(size>250){
	    growing = false;
	}
	if(size<1){
	    growing = true;
	}
	rid = window.requestAnimationFrame(center_circle);
    };

    rid = window.requestAnimationFrame(center_circle);
    
};

var x = 250;
var y = 250;
var xdirection = 0;//0 is right, 1 is left
var ydirection = 0;//1 is up, 0 is down


var animateDVD = function(){
    var rectL = 100;
    var rectH = 100;
    
    window.cancelAnimationFrame(rid);
    var dvd_rectangle = function(){
	clear_svg();
	console.log("rect");

	var c = document.createElementNS("http://www.w3.org/2000/svg","rect");
	c.setAttribute("width", "100");
	c.setAttribute("height", "100");
	c.setAttribute("x", x);
	c.setAttribute("y", y);
	c.setAttribute("style", "fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)");
	document.getElementById("vimage").appendChild(c);
	//randomness
	var rand = Math.random();
	rand = rand * 100;
	if(xdirection == 0){
	    if(rand > 50){
		x+=1;
	    }
	}
	else{
	    if(rand > 50){
		x-=1;
	    }
	}
	//ifs
	
	if(xdirection == 0 && ydirection == 0){
	    x++;
	    y++;
	}
	if(xdirection == 0 && ydirection == 1){
	    x++;
	    y--;
	}
	if(xdirection == 1 && ydirection == 1){
	    x--;
	    y--;
	}
	if(xdirection == 1 && ydirection == 0){
	    x--;
	    y++;
	}
	
	if(x > (500-rectL)){
	    xdirection = 1;
	}
	if(x < 0){
	    xdirection = 0;
	}
	if(y > (500-rectH)){
	    ydirection = 1;
	}
	if(y < 0){
	    ydirection = 0;
	}
	
	rid = window.requestAnimationFrame(dvd_rectangle);
    };

    rid = window.requestAnimationFrame(dvd_rectangle);
    
};


var stopIt = function(){
    window.cancelAnimationFrame(rid)
};

var clear_svg = function(){
    var svg = document.getElementById("vimage");
    while (svg.lastChild) {
	svg.removeChild(svg.lastChild);
    };
};


//listeners
document.getElementById("clear").addEventListener("click", clear_svg);
document.getElementById("stop").addEventListener("click", stopIt);
document.getElementById("circle").addEventListener("click", animateCircle);
document.getElementById("dvd").addEventListener("click", animateDVD);
