var p1Butt = document.getElementById("p1");
var p2Butt = document.getElementById("p2");
var p3Butt = document.getElementById("p3");
var p1Display = document.querySelector("#p1Display");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var upto = document.getElementById("upto");

var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

numInput.addEventListener("change" , function(){
	upto.textContent = numInput.value;
	//NunmInput is String Convert it into number
	winningScore = Number(numInput.value);
	reset();
});

p1Butt.addEventListener("click", function(){
	if(!gameOver){
		p1score++;
		if(p1score === winningScore){
			gameOver = true;
			p1Display.classList.add("winner");
			p2Display.classList.add("losser");
		}
		p1Display.textContent = p1score;
	}
						});

p2Butt.addEventListener("click", function(){
	if(!gameOver){
		p2score++;
		if(p2score === winningScore){
			gameOver = true;
			p2Display.classList.add("winner");
			p1Display.classList.add("losser");
		}
		p2Display.textContent = p2score;
	}
						});

p3Butt.addEventListener("click" , function(){
	reset();
});

function reset(){
	p1score = 0;
	p2score = 0;
	p1Display.textContent = p1score;
	p2Display.textContent = p2score;
	p1Display.classList.remove("winner");
	p1Display.classList.remove("losser");
	p2Display.classList.remove("winner");
	p2Display.classList.remove("losser");
	gameOver = false;
}