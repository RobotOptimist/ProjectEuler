def largest_prime(number)
	num = Math.sqrt(number).round 
	arr = 2..num
	sieve = []
	arr.each do |i|
		if (i===3 || i===2 || i % 6 === 1 || i % 6 === 5) 
			sieve << i
		end
	end
	
	
	sieve.each do |i|
		unless (number % i === 0 && i % 2 != 0 || i === 2) && (i % 5 != 0 || i === 5)
			then sieve.delete(i)
		end
	end
	
	
	sieve.each do |i|
		sieve.reverse.each do |j|
			if j % i === 0 && j != i				
				sieve.delete(j)
			end
		end
	end
	
	sieve.sort! {|x,y| y<=>x}
	p sieve[0]
	
end

largest_prime(1000000000)