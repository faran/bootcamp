	var numsOfColors = 6;
	var colors = [];
	var pickedColor;

	var colorDisplay = document.getElementById("colorDisplay");
	var squares = document.querySelectorAll(".square");
	var messageDisplay = document.querySelector("#message");
	var h1 = document.querySelector("h1")
	var resetbtn = document.getElementById("reset");
	var modeBtn = document.querySelectorAll(".mode");

	init();
	function init(){
		setUpModeButtons();
		setUpSquares();
		reset();
	}

	function setUpSquares(){
		for(var i = 0; i < squares.length; i++){
		//add click listeners to square
		squares[i].addEventListener("click", function(){
		//grab color of click square
		var clickedColor = this.style.backgroundColor;
		//compare color to picked color
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetbtn.textContent = "Play Again";
			}else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again";
			}
		});
	  }
	}

	function setUpModeButtons(){
		for (var i = 0; i < modeBtn.length; i++) {
			modeBtn[i].addEventListener("click", function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numsOfColors = 3: numsOfColors = 6;
			reset();
			});
	  	}
	}

	function reset(){
		colors = generateRandomColors(numsOfColors);
		//pick a new random color from array
		pickedColor = pickColors();
		colorDisplay.textContent = pickedColor;
		resetbtn.textContent = "New Colors";
		messageDisplay.textContent = "";
		for (var i = 0; i < squares.length; i++){
			if (colors[i]) {
				squares[i].style.backgroundColor = colors[i];
				squares[i].style.display = "block";
			}else{
				squares[i].style.display = "none";
			}
		}
		h1.style.backgroundColor = "steelblue";
	}

	resetbtn.addEventListener("click", function(){
		reset();
	});

	function changeColors(color){
		for (var i = 0; i < colors.length; i++) {
			squares[i].style.backgroundColor = color;
		}
	}

	function pickColors(){
		var random = Math.floor(Math.random() * colors.length);
		return colors[random]
	}

	function generateRandomColors(num){
		//make an arrray
		var arr = [];
		for (var i = 0; i < num; i++) {
			arr.push(randomColor());
		}
		//add num random colors to arr
		return arr;
	}

	function randomColor(){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}
