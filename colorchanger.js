var button = document.querySelector("button");

// button.addEventListener("click", function(){
// 	if (document.body.style.background === "yellow"){
// 		document.body.style.background = "purple";
// 	}else{
// 		document.body.style.background = "yellow";
// 	}
// });

button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});