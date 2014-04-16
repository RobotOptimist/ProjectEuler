//multiples of 3 and 5

var Multipleof3 = function(number){
    if(number%3===0){
		return true;
	}
	else{
		return false;
	}
};

var Multipleof5 = function(number){
	if(number%5===0){
		return true;
	}
	else{
		return false;
	}
};

var threes = 0;
var fives = 0;
var threesNfives = 0;

for(i=1;i<1000;i++){
	if(Multipleof3(i) && Multipleof5(i)){
		threesNfives = threesNfives + i;
	}
	else if(Multipleof3(i)){
		threes = threes + i;
	}
	else if(Multipleof5(i)){
		fives = fives + i;
	}
}

var total = threes + fives + threesNfives;
console.log(total);