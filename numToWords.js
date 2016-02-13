//empty number string
var numbah = "";

//parses 1,2,3,4,5,6,7,8,9
function parseNum(number){
	if (number === 1) numbah = numbah + "one";
	else if (number === 2) numbah = numbah + "two";
	else if (number === 3) numbah = numbah + "three";
	else if (number === 4) numbah = numbah + "four";
	else if (number === 5) numbah = numbah + "five";
	else if (number === 6) numbah = numbah + "six";
	else if (number === 7) numbah = numbah + "seven";
	else if (number === 8) numbah = numbah + "eight";
	else if (number === 9) numbah = numbah + "nine";
}

//parses 2X, 3X, 4X, 5X, 6X, 7X, 8X, 9X
function parseTens(number){
	if (number === 2) numbah = numbah + "twenty";
	else if (number === 3) numbah = numbah + "thirty";
	else if (number === 4) numbah = numbah + "fourty";
	else if (number === 5) numbah = numbah + "fifty";
	else if (number === 6) numbah = numbah + "sixty";
	else if (number === 7) numbah = numbah + "seventy";
	else if (number === 8) numbah = numbah + "eighty";
	else if (number === 9) numbah = numbah + "ninety";
}

//parses numbers from 10 until 19
function parseTees(number){
	if (number === 0) numbah = numbah + "ten";
	else if (number === 1) numbah = numbah + "eleven";
	else if (number === 2) numbah = numbah + "twelve";
	else if (number === 3) numbah = numbah + "thirteen";
	else if (number === 4) numbah = numbah + "fourteen";
	else if (number === 5) numbah = numbah + "fifteen";
	else if (number === 6) numbah = numbah + "sixteen";
	else if (number === 7) numbah = numbah + "seventeen";
	else if (number === 8) numbah = numbah + "eighteen";
	else if (number === 9) numbah = numbah + "nineteen";
}

//main numToWords function
function numToWords(argument){
	//initialises the number string to empty
	numbah = "";
	//if the argument is not a number, tell the user that it's not
	if (isNaN(argument)) console.log("Not a number");
	else {
		var thousand;
		if(argument>1000000) console.log("Please input a number from nought to 1000000");
		else if (argument === 0) console.log("Nought/Zero");
		else if (argument === 1000000) console.log("one million");
		else {
			if (argument >= 100000){
				num = argument / 100000;
				parseNum(parseInt(num));
				numbah = numbah + " hundred ";
				argument = argument - (parseInt(num)*100000);
				thousand = 1;
			}
			if (argument >= 10000){
				num = argument / 10000;
				if (parseInt(num) === 1) {
					parseTees((parseInt(argument/1000))%10);
					argument = argument - ((parseInt(argument/1000))*1000);
				}
				else {
					parseTens(parseInt(num));
					argument = argument - ((parseInt(num)*10000));
					numbah = numbah + " ";
				}
				thousand = 1
			}
			if (argument >=1000){
				num = argument / 1000;
				parseNum(parseInt(num));
				argument = argument - (parseInt(num)*1000);
				thousand = 1;
			}
			if (thousand === 1) numbah = numbah + " thousand ";
			if (argument >=100){
				num = argument / 100;
				parseNum(parseInt(num));
				numbah = numbah + " hundred ";
				argument = argument - (parseInt(num)*100);
			}
			if (argument >=10){
				num = argument / 10;
				if (parseInt(num) === 1) {
					parseTees(argument%10);
					argument = argument - (num*10);
				}
				else {
					parseTens(parseInt(num));
					argument = argument - ((parseInt(num)*10));
					numbah = numbah + " ";
				}
			}
			if (argument > 0) parseNum(argument);
			console.log(numbah);
		}
	}
}
