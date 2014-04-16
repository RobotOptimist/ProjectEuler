var GoldenR = 1.61803398875;

var i = 1;
var total = 0;

while (i<4000000){

    i =  Math.round(i * GoldenR);

	if (i%2===0){
		total += i;
	}
    console.log("Fib: " + i);
    console.log("Total Even: " + total);
}