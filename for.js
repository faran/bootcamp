console.log("Numbers between -10 and 19");

for (var i = -10; i<=19 - 1; i++) {
	console.log(i);
}


console.log("Even numbers");

for (var i = 10; i <=40; i++) {
	if(i % 2 === 0){
		console.log(i);
	}
}

console.log("Odd numbers between 300 and 333");

for (var i = 300; i<=333; i++) {
		if(i % 2 === 1){
		console.log(i);
	}
}

console.log("Numbers divided by 5 and 3, between 5 and 50");

var numb = 5;
while (numb <= 50){
	if (numb % 5 === 0 && numb % 3 === 0){
		console.log(numb);
	}numb ++;
}

for (var i = 5; i <= 50; i++) {
	if (numb % 5 === 0 && numb % 3 === 0){
		console.log(numb);
	}
}

