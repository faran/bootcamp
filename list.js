

var myList = ["new item 1"];
var todo = prompt("What you want to do");

while (todo !== "quit"){

	if(todo === "list"){
		todoList();
	}else if (todo === "new"){
		todoNew();
	}else if (todo === "delete"){
		todoDelete();
	}
	todo = prompt("What you want to do");
}


function todoNew() {
	var newItem = prompt("Enter new item");
	myList.push(newItem);
	console.log("Item Added");
}

function todoList() {
	console.log("***********");
	myList.forEach(function(items, i){
		console.log(i + " : " + myList[i]);
	});
	console.log("***********");
}

function todoDelete(argument) {
	var deleteItem = prompt("Enter index")
	myList.splice(deleteItem, 1);
	console.log("Item Deleted");
}

