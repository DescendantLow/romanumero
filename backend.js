//Backend 

function romaNumeroToInteger(input) {

var num = romaToInt(input.charAt(0));
var previous, current;

for(var i = 1; i < input.length; i++){
	current = romaToInt(input.charAt(i));
	previous = romaToInt(input.charAt(i-1));
	if(current <= previous){
		num += current;
	} else {
		num = num - previous*2 + current;
	}
}
if(num < 0) {
	document.getElementById("output").value = "INVALID INPUT!!";
}else
	document.getElementById("output").value = num;
}

function romaToInt(c){
switch (c){
	case 'I': return 1;
	case 'V': return 5;
	case 'X': return 10;
	case 'L': return 50;
	case 'C': return 100;
	case 'D': return 500;
	case 'M': return 1000;
	default: return -1;
	}
}
