function fibonacci(num) {
  if (num <= 1) return num; // Base case: if num is 0 or 1, return num
  return fibonacci(num - 1) + fibonacci(num - 2); // Recursive case: return sum of previous two Fibonacci numbers
}

module.exports = fibonacci;
