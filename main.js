var functionCalled = process.argv[2];

if (functionCalled == "longueur") {
	console.log(longueur(process.argv[3]));
} else if (functionCalled == "effacer") {
	console.log(effacer(process.argv[3], process.argv[4]));
} else if (functionCalled == "second") {
	console.log(second(prepareArray(process.argv[3])));
} else {
	console.log(functionCalled + " is not a known function. Try longueur mot, effacer lettre mot or second \"[x, y, z]\"");
}

function longueur(mot) {
	var longueur = mot.length
	return longueur;
}

function effacer(lettre, mot) {
	var regex = new RegExp(lettre, 'g');
	var result = mot.replace(regex, "")
	return result;
}

function second(tab) {
	tab = tab.sort(function(a, b){return a-b});
	return(tab[1]);
}

function prepareArray(input) {
	input = input.replace('[', "");
	input = input.replace(']', "");
	input = effacer(' ', input);
	var tab = input.split(",");
	return tab
}

function compose(f, g) {
	return f(g());
}

function map(f, arr) {
	var index;
	for (index = 0; index < arr.length; ++index) {
		arr[index] = f(arr[index]);
	}
	return arr;
}

function fmap(farr, x) {
	var index;
	for (index = 0; index < farr.length; ++index) {
		farr[index] = farr[index](x);
	}
	return farr;
}
