function isEven(num){
	return (num % 2 === 0)
}

function factorial(num){
	var result = 1;
	for (var i = 2; i<= num; i++) {
		result *= i;
	}
	return result;
}

function kebabCase(x){
	return x.replace(/-/g, "_");
}