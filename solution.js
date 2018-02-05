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

	// let cache = null;

	for (let j = 0; j < (days - window + 1); j++) {
		let testingWindow = homePrices.slice(j, window + j)
		
		let increased = 0;
		let decreased = 0;

		for (let i = 0; i < testingWindow.length; i++) {

			// if (i == 0 && cache) {
			// 	if (cache === "increased") increased += 1;
			// 	if (cache === "decreased") decreased += 1;
			// 	i++;
			// }

			if (testingWindow[i + 1] > testingWindow[i]) {
				increased += 1;
			}

			if (testingWindow[i + 1] < testingWindow[i]) {
				decreased += 1;
			}

			if (increased == testingWindow.length - 1) increased += 1
			if (decreased == testingWindow.length - 1) decreased += 1
		}
		console.log(increased - decreased);
	}
}

// console.time(trendTracker);
trendTracker(5, 3, [188930, 194123, 201345, 154243, 154243]);
// trendTracker(10, 3, [188930, 194123, 201345, 154243, 154243, 188930, 194123, 201345, 154243, 154243]);
// trendTracker(20, 3, [188930, 194123, 201345, 154243, 154243, 188930, 194123, 201345, 154243, 154243, 188930, 194123, 201345, 154243, 154243, 188930, 194123, 201345, 154243, 154243]);
// console.timeEnd(trendTracker); 
// 2.912ms without cache
// 3.061ms with cache
// 2.938ms without cache
// 4.954ms with cache


