nos=6
var colors=generateColors(nos)
var pickedColor=colors[pickColor()]
var dispColor=document.getElementById("dispColor");
var squares=document.getElementsByClassName("square");
var resetButton=document.getElementById("reset");
var h1=document.querySelector("h1");
var butt=document.getElementsByClassName("butt");
var msgArea=document.getElementById("msg")

dispColor.textContent=pickedColor;

for(var i=0;i<butt.length;i++){
	butt[i].addEventListener("click", function(){
		butt[0].classList.remove("selected");
		butt[1].classList.remove("selected");
		this.classList.add("selected")
		if(this.textContent==="EASY"){
			nos=3
		}
		else{
			nos=6
		}
		reset();
	});
}

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		if(this.style.backgroundColor===pickedColor){
			changeColors();
			h1.style.backgroundColor=pickedColor;
			resetButton.textContent="Play Again?";
			msgArea.textContent="Congo";
		}
		else{
			this.style.backgroundColor="#232323";
			msgArea.textContent="Try Again!";
			// this.style.display="hide";
		}
	})
}

resetButton.addEventListener("click",function(){
	reset()
});

function reset(){
	colors=generateColors(nos);
	pickedColor=colors[pickColor()]
	dispColor.textContent=pickedColor;

	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
		h1.style.backgroundColor="steelblue";
		msgArea.textContent="";
		resetButton.textContent="New colors"
	}
}

function changeColors(){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=pickedColor;
	}
}


function generateColors(nos){
	var colors=[]
	for(var i=0;i<nos;i++){
		colors.push(randColor());
	}
	return colors
}

function pickColor(){
	return Math.floor(Math.random()*nos)
}

function randColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb"+"("+r+", "+g+", "+b+")"
}