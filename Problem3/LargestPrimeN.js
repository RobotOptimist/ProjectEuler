var startingN = 600851475143;

var FindPrimeFactor = function(number){
    var maximumPossible;
    if(number>100){
        maximumPossible = Math.round(Math.sqrt(number));
    }
    else
    {
        maximumPossible = number;
    }
    
    var sieve = [];
    var primes = [];
    
    for(i=2; i<=maximumPossible; i++){
        if(i===2||i===3||i%6===1||i%6===5){
        sieve.push(i);
        }
    }
    
    for(j=0;j<=sieve.length;j++){
        if(number%sieve[j]===0 && (sieve[j]%2!==0 || sieve[j]===2) && (sieve[j]%5!==0||sieve[j]===5))
        {
            primes.push(sieve[j]);        
        }
    }
    
    for(j=0;j<=primes.length;j++){
        for(i=primes.length;i>=0;i--){
            if(primes[i]===primes[j]){
                //do nothing
            }
            else if(primes[i]%primes[j]===0){
                primes.splice(i,1);
            }    
        }            
    }
            
    
    return primes.pop();
    
};

var someNumber = startingN;

console.log(FindPrimeFactor(someNumber) + " is the largest Prime Factor of " + someNumber);
