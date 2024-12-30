// Function to perform binary addition with steps
function binaryAddition(bin1: string, bin2: string): string {
  console.log("Binary Addition:");
  console.log(`1. First binary string: ${bin1}`);
  console.log(`2. Second binary string: ${bin2}`);

  // Convert the first binary string to a decimal number
  const num1 = parseInt(bin1, 2);
  console.log(`3. Convert ${bin1} to decimal: ${num1}`);

  // Convert the second binary string to a decimal number
  const num2 = parseInt(bin2, 2);
  console.log(`4. Convert ${bin2} to decimal: ${num2}`);

  // Add the two decimal numbers
  const sum = num1 + num2;
  console.log(`5. Add ${num1} + ${num2} = ${sum}`);

  // Convert the decimal sum back to a binary string and return it
  const result = sum.toString(2);
  console.log(`6. Convert ${sum} back to binary: ${result}`);

  return result;
}

// Function to perform binary subtraction with steps
function binarySubtraction(bin1: string, bin2: string): string {
  console.log("\nBinary Subtraction:");
  console.log(`1. First binary string: ${bin1}`);
  console.log(`2. Second binary string: ${bin2}`);

  // Convert the first binary string to a decimal number
  const num1 = parseInt(bin1, 2);
  console.log(`3. Convert ${bin1} to decimal: ${num1}`);

  // Convert the second binary string to a decimal number
  const num2 = parseInt(bin2, 2);
  console.log(`4. Convert ${bin2} to decimal: ${num2}`);

  // Subtract the second decimal number from the first
  const difference = num1 - num2;
  console.log(`5. Subtract ${num1} - ${num2} = ${difference}`);

  // Convert the decimal difference back to a binary string and return it
  const result = difference.toString(2);
  console.log(`6. Convert ${difference} back to binary: ${result}`);

  return result;
}

// Function to perform binary multiplication with steps
function binaryMultiplication(bin1: string, bin2: string): string {
  console.log("\nBinary Multiplication:");
  console.log(`1. First binary string: ${bin1}`);
  console.log(`2. Second binary string: ${bin2}`);

  // Convert the first binary string to a decimal number
  const num1 = parseInt(bin1, 2);
  console.log(`3. Convert ${bin1} to decimal: ${num1}`);

  // Convert the second binary string to a decimal number
  const num2 = parseInt(bin2, 2);
  console.log(`4. Convert ${bin2} to decimal: ${num2}`);

  // Multiply the two decimal numbers
  const product = num1 * num2;
  console.log(`5. Multiply ${num1} * ${num2} = ${product}`);

  // Convert the decimal product back to a binary string and return it
  const result = product.toString(2);
  console.log(`6. Convert ${product} back to binary: ${result}`);

  return result;
}

// Example usage of the functions

const bin1 = "1010"; // Binary representation of 10 in decimal
const bin2 = "110"; // Binary representation of 6 in decimal

// Perform binary addition and log the result
console.log("Result of Addition: " + binaryAddition(bin1, bin2));

// Perform binary subtraction and log the result
console.log("Result of Subtraction: " + binarySubtraction(bin1, bin2));

// Perform binary multiplication and log the result
console.log("Result of Multiplication: " + binaryMultiplication(bin1, bin2));
