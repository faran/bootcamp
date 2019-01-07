var movie = [
	{
	title: "In Bruges",
	rating: 5,
	hasWatched: true
	},
	{
	title: "Frozen",
	rating: 4.5,
	hasWatched: false
	},
	{
	title: "Mad Max Fury Road",
	rating: 5,
	hasWatched: true
	},
	{
	title: "Les Miserables",
	rating: 3.5,
	hasWatched: false
	}
]


movie.forEach(function(iterate){
	var result = "You have "
	
	if(iterate.hasWatched){
		result += "watched ";
	}else{
		result += "not seen ";
		}
	
	result += "\"" + iterate.title  + "\" - ";
	result += iterate.rating + " Stars";
	console.log(result);
});