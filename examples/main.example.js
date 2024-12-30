// Function to perform binary addition
function binaryAddition(bin1, bin2) {
  // Convert the first binary string to a decimal number
  const num1 = parseInt(bin1, 2);

  // Convert the second binary string to a decimal number
  const num2 = parseInt(bin2, 2);

  // Add the two decimal numbers
  const sum = num1 + num2;

  // Convert the decimal sum back to a binary string and return it
  return sum.toString(2);
}

// Function to perform binary subtraction
function binarySubtraction(bin1, bin2) {
  // Convert the first binary string to a decimal number
  const num1 = parseInt(bin1, 2);

  // Convert the second binary string to a decimal number
  const num2 = parseInt(bin2, 2);

  // Subtract the second decimal number from the first
  const difference = num1 - num2;

  // Convert the decimal difference back to a binary string and return it
  return difference.toString(2);
}

// Function to perform binary multiplication
function binaryMultiplication(bin1, bin2) {
  // Convert the first binary string to a decimal number
  const num1 = parseInt(bin1, 2);

  // Convert the second binary string to a decimal number
  const num2 = parseInt(bin2, 2);

  // Multiply the two decimal numbers
  const product = num1 * num2;

  // Convert the decimal product back to a binary string and return it
  return product.toString(2);
}

// Example usage of the functions

const bin1 = "1010"; // Binary representation of 10 in decimal
const bin2 = "110"; // Binary representation of 6 in decimal

// Perform binary addition and log the result
console.log("Addition: " + binaryAddition(bin1, bin2));
// Expected Output: "Addition: 10000" (10 + 6 = 16 in decimal, 10000 in binary)

// Perform binary subtraction and log the result
console.log("Subtraction: " + binarySubtraction(bin1, bin2));
// Expected Output: "Subtraction: 100" (10 - 6 = 4 in decimal, 100 in binary)

// Perform binary multiplication and log the result
console.log("Multiplication: " + binaryMultiplication(bin1, bin2));
// Expected Output: "Multiplication: 111100" (10 * 6 = 60 in decimal, 111100 in binary)
