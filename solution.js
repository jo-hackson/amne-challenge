var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);

  rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4) {
      if(rawFile.status === 200 || rawFile.status == 0) {
        assignVariables(rawFile.responseText);
      }
    }
	}
  rawFile.send(null);
}

readTextFile("file:///Users/wjjackson/Desktop/amne-challenge/input.txt");

function assignVariables(textFileContent) {
	let lineOne = textFileContent.split("\n")[0].split(",")[0].split(" ");
	let days = parseInt(lineOne[0]);
	let windowFrame = parseInt(lineOne[1]);

	let homePrices = textFileContent.split("\n")[1].split(" ").map( homePrice => parseInt(homePrice));
	return trendTracker(days, windowFrame, homePrices)
}


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

