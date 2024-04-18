function fibonacci(num) {
	if (num <= 1) return num; // Base case: return num for 0 and 1
return fibonacci(num - 1) + fibonacci(num - 2); // Recursive case: return sum of previous two Fibonacci numbers
}

module.exports = fibonacci;
