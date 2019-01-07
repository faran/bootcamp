var input = [1,1];
var inputString = ["a","b","c","a","a"];

function printReverse(){
for (var i = inputString.length - 1; i >= 0; i--) {
	console.log(inputString[i]);
}
}

// printReverse();

function isUniform(arr){
	var first = arr[0];
	for (var i = 1; i < arr.length; i++) {
			if (arr[i] !== first){
				return false;
			}
	}
	return true;
}

// isUniform();

function sumArray(){
	var total = 0;
	for (var i = 0; i < input.length; i++) {
		total += input[i];
	}
	console.log(total);
}

// sumArray();


function maxNumber(){
	var maxNumber=0;
	for (var i = 0; i < input.length; i++) {
		if(maxNumber <= input[i]){
			maxNumber = input[i];
		}
	}console.log(maxNumber)
}

// maxNumber();