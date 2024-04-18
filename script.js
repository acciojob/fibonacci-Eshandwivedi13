function fibonacci(num) {
  if (num <= 2) return num - 1; // Adjusted base case
  return fibonacci(num - 1) + fibonacci(num - 2); // Recursive case
}

module.exports = fibonacci;