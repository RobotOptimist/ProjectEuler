def threes(num)
	unless num % 3 === 0 then return false else return true end	
end

def fives(num)
	unless num % 5 === 0 then return false else return true end	
end

def threes_n_fives(num)
  arr = 3...num
  sum = []
  arr.each do |i|
	if threes(i) || fives(i)
		sum << i
	end
  end
  sum = sum.uniq  
  final = sum.inject(0) {|fin,itr| fin + itr}  
end

p threes_n_fives(1000)