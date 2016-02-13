//number variable to be used
var n;
//parses words to numbers
function parseWords(words){
	//initialises the number to nought for every call of the function
	n = 0;
	//copies the words string to a temporary variable
	var wnum = words;
	//temporary variable
	var r=0;
	if(/^(one|two|three|four|five|six|seven|eight|nine)/.test(wnum)){
		//sets the initial value of 
		if (/^(one)/.test(wnum)) n = 1;
		else if (/^(two)/.test(wnum)) n = 2;
		else if (/^(three)/.test(wnum)) n = 3;
		else if (/^(four)/.test(wnum)) n = 4;
		else if (/^(five)/.test(wnum)) n = 5;
		else if (/^(six)/.test(wnum)) n = 6;
		else if (/^(seven)/.test(wnum)) n = 7;
		else if (/^(eight)/.test(wnum)) n = 8;
		else if (/^(nine)/.test(wnum)) n = 9;
		wnum = wnum.replace(/^(one|two|three|four|five|six|seven|eight|nine)/,"");
		if (/^( )/.test(wnum)) wnum = wnum.replace(/^( )/,"");
		if (/^(million)/.test(wnum)){
			n = n*1000000;
			return;
		}
		if (/^(hundred)/.test(wnum)){
			n = n*100;
			wnum = wnum.replace(/^(hundred)/,"");
			if (/^( )/.test(wnum)) wnum = wnum.replace(/ /,"");
		}
	}
	if (/^(twenty|thirty|fourty|fifty|sixty|seventy|eighty|ninety)/.test(wnum)){
		if (/^(twenty)/.test(wnum)) r = 20;
		else if (/^(thirty)/.test(wnum)) r = 30;
		else if (/^(fourty)/.test(wnum)) r = 40;
		else if (/^(fifty)/.test(wnum)) r = 50;
		else if (/^(sixty)/.test(wnum)) r = 60;
		else if (/^(seventy)/.test(wnum)) r = 70;
		else if (/^(eighty)/.test(wnum)) r = 80;
		else if (/^(ninety)/.test(wnum)) r = 90;
		wnum = wnum.replace(/^(twenty|thirty|fourty|fifty|sixty|seventy|eighty|ninety)/,"");
		if (/^( )/.test(wnum)) wnum = wnum.replace(/ /,"");
		if (/^(one)/.test(wnum)) r += 1;
		else if (/^(two)/.test(wnum)) r += 2;
		else if (/^(three)/.test(wnum)) r +=3;
		else if (/^(four)/.test(wnum)) r += 4;
		else if (/^(five)/.test(wnum)) r += 5;
		else if (/^(six)/.test(wnum)) r += 6;
		else if (/^(seven)/.test(wnum)) r += 7;
		else if (/^(eight)/.test(wnum)) r += 8;
		else if (/^(nine)/.test(wnum)) r += 9;
		wnum = wnum.replace(/^(one|two|three|four|five|six|seven|eight|nine)/,"");
		if (/^( )/.test(wnum)) wnum = wnum.replace(/ /,"");
	}
	if (/^(ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen)/.test(wnum)){
		if (/^(ten)/.test(wnum)) r = 10;
		else if (/^(eleven)/.test(wnum)) r = 11;
		else if (/^(twelve)/.test(wnum)) r = 12;
		else if (/^(thirteen)/.test(wnum)) r = 13;
		else if (/^(fourteen) /.test(wnum)) r = 14;
		else if (/^(fifteen) /.test(wnum)) r = 15;
		else if (/^(sixteen) /.test(wnum)) r = 16;
		else if (/^(seventeen) /.test(wnum)) r = 17;
		else if (/^(eighteen) /.test(wnum)) r = 18;
		else if (/^(nineteen) /.test(wnum)) r = 19;
		wnum = wnum.replace(/^(ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen)/,"");
		if (/^( )/.test(wnum)) wnum = wnum.replace(/ /,"");
	}
	if(/^(one|two|three|four|five|six|seven|eight|nine)/.test(wnum)){
		if (/^(one)/.test(wnum)) r += 1;
		else if (/^(two)/.test(wnum)) r += 2;
		else if (/^(three)/.test(wnum)) r +=3;
		else if (/^(four)/.test(wnum)) r += 4;
		else if (/^(five)/.test(wnum)) r += 5;
		else if (/^(six)/.test(wnum)) r += 6;
		else if (/^(seven)/.test(wnum)) r += 7;
		else if (/^(eight)/.test(wnum)) r += 8;
		else if (/^(nine)/.test(wnum)) r += 9;
		wnum = wnum.replace(/^(one|two|three|four|five|six|seven|eight|nine)/,"");
		if (/^( )/.test(wnum)) wnum = wnum.replace(/ /,"");
	}
	n = n+r;
	if (/^(thousand)/.test(wnum)){
		n = n*1000;
		r = 0;
		wnum = wnum.replace(/^(thousand)/,"");
		if (/^( )/.test(wnum)) wnum = wnum.replace(/ /,"");
		if(/^(one|two|three|four|five|six|seven|eight|nine)/.test(wnum)){
			//sets the initial value of r 
			if (/^(one)/.test(wnum)) r = 1;
			else if (/^(two)/.test(wnum)) r = 2;
			else if (/^(three)/.test(wnum)) r = 3;
			else if (/^(four)/.test(wnum)) r = 4;
			else if (/^(five)/.test(wnum)) r = 5;
			else if (/^(six)/.test(wnum)) r = 6;
			else if (/^(seven)/.test(wnum)) r = 7;
			else if (/^(eight)/.test(wnum)) r = 8;
			else if (/^(nine)/.test(wnum)) r = 9;
			wnum = wnum.replace(/^(one|two|three|four|five|six|seven|eight|nine)/,"");
			if (/^( )/.test(wnum)) wnum = wnum.replace(/ /,"");
			if (/^(hundred)/.test(wnum)){
				r = r*100;
				wnum = wnum.replace(/^(hundred)/,"");
				if (/^( )/.test(wnum)) wnum = wnum.replace(/ /,"");
			}
		}
		if (/^(twenty|thirty|fourty|fifty|sixty|seventy|eighty|ninety)/.test(wnum)){
			if (/^(twenty)/.test(wnum)) r += 20;
			else if (/^(thirty)/.test(wnum)) r += 30;
			else if (/^(fourty)/.test(wnum)) r += 40;
			else if (/^(fifty)/.test(wnum)) r += 50;
			else if (/^(sixty)/.test(wnum)) r += 60;
			else if (/^(seventy)/.test(wnum)) r += 70;
			else if (/^(eighty)/.test(wnum)) r += 80;
			else if (/^(ninety)/.test(wnum)) r += 90;
			wnum = wnum.replace(/^(twenty|thirty|fourty|fifty|sixty|seventy|eighty|ninety) /,"");
			if (/^( )/.test(wnum)) wnum = wnum.replace(/ /,"");
			if (/^(one)/.test(wnum)) r += 1;
			else if (/^(two)/.test(wnum)) r += 2;
			else if (/^(three)/.test(wnum)) r +=3;
			else if (/^(four)/.test(wnum)) r += 4;
			else if (/^(five)/.test(wnum)) r += 5;
			else if (/^(six)/.test(wnum)) r += 6;
			else if (/^(seven)/.test(wnum)) r += 7;
			else if (/^(eight)/.test(wnum)) r += 8;
			else if (/^(nine)/.test(wnum)) r += 9;
			wnum = wnum.replace(/^(one|two|three|four|five|six|seven|eight|nine)/,"");
			if (/^( )/.test(wnum)) wnum = wnum.replace(/ /,"");
		}
		if (/^(ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen)/.test(wnum)){
			if (/^(ten)/.test(wnum)) r = 10;
			else if (/^(eleven)/.test(wnum)) r = 11;
			else if (/^(twelve)/.test(wnum)) r = 12;
			else if (/^(thirteen)/.test(wnum)) r = 13;
			else if (/^(fourteen)/.test(wnum)) r = 14;
			else if (/^(fifteen)/.test(wnum)) r = 15;
			else if (/^(sixteen)/.test(wnum)) r = 16;
			else if (/^(seventeen)/.test(wnum)) r = 17;
			else if (/^(eighteen)/.test(wnum)) r = 18;
			else if (/^(nineteen)/.test(wnum)) r = 19;
			wnum = wnum.replace(/^(ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen)/,"");
			if (/^( )/.test(wnum)) wnum = wnum.replace(/ /,"");
		}
		if(/^(one|two|three|four|five|six|seven|eight|nine)/.test(wnum)){
			if (/^(one)/.test(wnum)) r += 1;
			else if (/^(two)/.test(wnum)) r += 2;
			else if (/^(three)/.test(wnum)) r +=3;
			else if (/^(four)/.test(wnum)) r += 4;
			else if (/^(five)/.test(wnum)) r += 5;
			else if (/^(six)/.test(wnum)) r += 6;
			else if (/^(seven)/.test(wnum)) r += 7;
			else if (/^(eight)/.test(wnum)) r += 8;
			else if (/^(nine)/.test(wnum)) r += 9;
			wnum = wnum.replace(/^(one|two|three|four|five|six|seven|eight|nine)/,"");
			if (/^( )/.test(wnum)) wnum = wnum.replace(/ /,"");
		}
		n = n+r;
	}
}

//main function to convert words to number
function wordsToNum(words){
	parseWords(words);
	console.log(n);
}

function wordsToCurrency(words,curr){
}