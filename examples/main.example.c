#include <stdio.h>
#include <stdlib.h>

// Function to convert an integer to a binary string
void intToBinary(int num, char *result) {
    int i = 0;

    // Handle the case where the number is 0
    if (num == 0) {
        result[i++] = '0';
    } else {
        // Loop to convert decimal number to binary
        while (num > 0) {
            result[i++] = (num % 2) + '0'; // Extract the least significant bit
            num /= 2;                     // Shift the number right (divide by 2)
        }
    }
    result[i] = '\0'; // Null-terminate the string

    // Reverse the string to correct the binary representation
    int start = 0;
    int end = i - 1;
    while (start < end) {
        // Swap characters to reverse the string
        char temp = result[start];
        result[start] = result[end];
        result[end] = temp;
        start++;
        end--;
    }
}

// Function to perform binary addition
char* binaryAddition(char* bin1, char* bin2) {
    // Convert binary strings to integers using base 2
    int num1 = strtol(bin1, NULL, 2);
    int num2 = strtol(bin2, NULL, 2);

    // Add the two integers
    int sum = num1 + num2;

    // Convert the sum back to binary
    static char result[32]; // Static array to store the result
    intToBinary(sum, result);
    return result; // Return the binary string
}

// Function to perform binary subtraction
char* binarySubtraction(char* bin1, char* bin2) {
    // Convert binary strings to integers using base 2
    int num1 = strtol(bin1, NULL, 2);
    int num2 = strtol(bin2, NULL, 2);

    // Subtract the second number from the first
    int difference = num1 - num2;

    // Convert the result back to binary
    static char result[32]; // Static array to store the result
    intToBinary(difference, result);
    return result; // Return the binary string
}

// Function to perform binary multiplication
char* binaryMultiplication(char* bin1, char* bin2) {
    // Convert binary strings to integers using base 2
    int num1 = strtol(bin1, NULL, 2);
    int num2 = strtol(bin2, NULL, 2);

    // Multiply the two integers
    int product = num1 * num2;

    // Convert the product back to binary
    static char result[32]; // Static array to store the result
    intToBinary(product, result);
    return result; // Return the binary string
}

int main() {
    // Example binary strings
    char* bin1 = "1010"; // 10 in decimal
    char* bin2 = "110";  // 6 in decimal

    // Perform binary addition and print the result
    printf("Addition: %s\n", binaryAddition(bin1, bin2));
    // Expected output: "Addition: 10000" (10 + 6 = 16 in decimal)

    // Perform binary subtraction and print the result
    printf("Subtraction: %s\n", binarySubtraction(bin1, bin2));
    // Expected output: "Subtraction: 100" (10 - 6 = 4 in decimal)

    // Perform binary multiplication and print the result
    printf("Multiplication: %s\n", binaryMultiplication(bin1, bin2));
    // Expected output: "Multiplication: 111100" (10 * 6 = 60 in decimal)

    return 0;
}
