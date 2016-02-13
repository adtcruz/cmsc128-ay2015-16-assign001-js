//numberDelimited function
function numberDelimited(nmb,delim,jmpn){
		if(isNaN(nmb)){
			console.log("Argument is not a number!");
		 	return;
		}
        //converts the number to string
        var ns = nmb.toString(); 
        //computes the index of the location of the delimiter
        var ndx = ns.length - jmpn;
        //makes the delimited number via slicing the string and inserting the
        //delimiter into the sliced string via string concatenations
        var dn = ns.slice(0,ndx) + delim + ns.slice(ndx);
        //prints the output to the console
        console.log(dn);
}