/* first access input.txt 

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function toPrint(text) {
	console.log(text);
}

function readTextFile(file) {
	var req = new XMLHttpRequest();

	req.open('GET', file);
	

	req.onload = function(){
	    toPrint(this.responseText);
	};

	req.send();
	
}


readTextFile("input.txt");

console.log("Hello"); */

/* assuming that now I have access to the information

var days
var window
var [averageHomeSalePrice] */

function trendTracker(days, window, homePrices) {

	let cache = {};

	for (var j = 0; j < (days - window + 1); j++) {
		let testingWindow = homePrices.slice(j, window + j)
		
		let increased = 0;
		let decreased = 0;

		for (let i = 0; i < testingWindow.length - 1; i++) {
			cache[something] = somethingelse;
			if (testingWindow[i + 1] > testingWindow[i]) increased += 1;
			if (testingWindow[i + 1] < testingWindow[i]) decreased += 1;
			if (increased == testingWindow.length - 1) increased += 1
		}
		console.log(increased - decreased);
	}
}

trendTracker(5, 3, [188930, 194123, 201345, 154243, 154243]);

// there is a way to make fast by caching
// because right now, I am doing some extra comparisons
// go through array and check at each interval and cache whether it is decreasing or increasing


