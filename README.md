# Binary Magic

Binary Magic is a high-performance project designed for handling binary arithmetic operations, showcasing the versatility of multiple programming languages. This project demonstrates binary addition, subtraction, and multiplication using Python, JavaScript, TypeScript, C#, C++, and C.

## Features

- **Binary Addition**: Add two binary numbers efficiently.
- **Binary Subtraction**: Subtract one binary number from another seamlessly.
- **Binary Multiplication**: Multiply two binary numbers with precision.

## Supported Languages

- **Python**
- **JavaScript**
- **TypeScript**
- **C#**
- **C++**
- **C**

## Prerequisites

Make sure you have the following installed for TypeScript implementation:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [TypeScript](https://www.typescriptlang.org/)

For other languages, ensure you have their respective compilers/interpreters set up.

## Setup

### TypeScript

1. Clone the repository:

   ```bash
   git clone https://github.com/RlxChap2/Binary-Magic.git
   cd Binary-Magic
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Compile TypeScript to JavaScript:

   ```bash
   npm run build
   ```

4. Run the program:
   ```bash
   npm start
   ```

## Code Overview

### `binaryAddition(bin1: string, bin2: string): string`

This function performs binary addition by:

1. Converting the binary strings (`bin1` and `bin2`) to decimal using `parseInt`.
2. Adding the two decimal numbers.
3. Converting the result back to a binary string using `toString(2)`.

### `binarySubtraction(bin1: string, bin2: string): string`

This function performs binary subtraction by:

1. Converting the binary strings (`bin1` and `bin2`) to decimal using `parseInt`.
2. Subtracting the second decimal number from the first.
3. Converting the result back to a binary string using `toString(2)`.

### `binaryMultiplication(bin1: string, bin2: string): string`

This function performs binary multiplication by:

1. Converting the binary strings (`bin1` and `bin2`) to decimal using `parseInt`.
2. Multiplying the two decimal numbers.
3. Converting the result back to a binary string using `toString(2)`.

## Example Usage

The example below demonstrates how to use the TypeScript functions:

```typescript
const bin1 = "1010"; // Binary representation of 10 in decimal
const bin2 = "110"; // Binary representation of 6 in decimal

console.log("Addition: " + binaryAddition(bin1, bin2));
// Expected Output: "Addition: 10000" (10 + 6 = 16 in decimal, 10000 in binary)

console.log("Subtraction: " + binarySubtraction(bin1, bin2));
// Expected Output: "Subtraction: 100" (10 - 6 = 4 in decimal, 100 in binary)

console.log("Multiplication: " + binaryMultiplication(bin1, bin2));
// Expected Output: "Multiplication: 111100" (10 * 6 = 60 in decimal, 111100 in binary)
```

Equivalent implementations are available in Python, C#, C++, and C, ensuring consistency across platforms and programming environments.

## Repository

- [GitHub Repository](https://github.com/RlxChap2/Binary-Magic)
  - [Examples](https://github.com/RlxChap2/Binary-Magic/examples)

## License

This project is licensed under the MIT [LICENCE](LICENCE).
