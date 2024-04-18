function fibonacci(num) {
  if(n==1)	return 0;
  if(n==2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2); // Recursive case: return sum of previous two Fibonacci numbers
}

module.exports = fibonacci;
