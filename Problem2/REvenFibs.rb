def even_fibs(num)
	ratio = 1.61803398875
	i = 1
	sum = []
	while i < num
		i = (i * ratio).round
		if i % 2 === 0 then sum << i end
	end
	p sum
	final = sum.inject(0) {|fin,itr|fin+itr}
	p final	
end

even_fibs(4000000)