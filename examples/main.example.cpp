#include <iostream>
#include <string>
#include <bitset>
#include <cmath>

// Function to convert a binary string to a decimal integer
int binaryToDecimal(const std::string& binary) {
    int decimal = 0;
    int length = binary.length();

    // Convert each binary digit to its corresponding decimal value
    for (int i = 0; i < length; i++) {
        if (binary[length - 1 - i] == '1') { // Check if the bit is 1
            decimal += pow(2, i); // Add 2^i to the result
        }
    }
    return decimal;
}

// Function to convert a decimal integer to a binary string
std::string decimalToBinary(int decimal) {
    if (decimal == 0) return "0"; // Handle edge case for 0

    std::string binary = "";
    while (decimal > 0) {
        binary = std::to_string(decimal % 2) + binary; // Append remainder to the binary string
        decimal /= 2; // Divide the number by 2
    }
    return binary;
}

// Function to perform binary addition
std::string binaryAddition(const std::string& bin1, const std::string& bin2) {
    int num1 = binaryToDecimal(bin1); // Convert binary to decimal
    int num2 = binaryToDecimal(bin2); 

    int sum = num1 + num2; // Perform addition

    return decimalToBinary(sum); // Convert result back to binary
}

// Function to perform binary subtraction
std::string binarySubtraction(const std::string& bin1, const std::string& bin2) {
    int num1 = binaryToDecimal(bin1); // Convert binary to decimal
    int num2 = binaryToDecimal(bin2); 

    int difference = num1 - num2; // Perform subtraction

    return decimalToBinary(difference); // Convert result back to binary
}

// Function to perform binary multiplication
std::string binaryMultiplication(const std::string& bin1, const std::string& bin2) {
    int num1 = binaryToDecimal(bin1); // Convert binary to decimal
    int num2 = binaryToDecimal(bin2); 

    int product = num1 * num2; // Perform multiplication

    return decimalToBinary(product); // Convert result back to binary
}

int main() {
    std::string bin1 = "1010"; // Binary representation of 10 in decimal
    std::string bin2 = "110";  // Binary representation of 6 in decimal

    // Perform binary addition and print the result
    std::cout << "Addition: " << binaryAddition(bin1, bin2) << std::endl;
    // Expected Output: "Addition: 10000" (10 + 6 = 16 in decimal, 10000 in binary)

    // Perform binary subtraction and print the result
    std::cout << "Subtraction: " << binarySubtraction(bin1, bin2) << std::endl;
    // Expected Output: "Subtraction: 100" (10 - 6 = 4 in decimal, 100 in binary)

    // Perform binary multiplication and print the result
    std::cout << "Multiplication: " << binaryMultiplication(bin1, bin2) << std::endl;
    // Expected Output: "Multiplication: 111100" (10 * 6 = 60 in decimal, 111100 in binary)

    return 0;
}
