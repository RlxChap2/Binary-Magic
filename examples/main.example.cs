using System;

class BinaryOperations
{
    // Function to convert binary string to decimal integer
    static int BinaryToDecimal(string binary)
    {
        return Convert.ToInt32(binary, 2); // Convert binary string to integer
    }

    // Function to convert decimal integer to binary string
    static string DecimalToBinary(int decimalNumber)
    {
        return Convert.ToString(decimalNumber, 2); // Convert integer to binary string
    }

    // Function to perform binary addition
    static string BinaryAddition(string bin1, string bin2)
    {
        int num1 = BinaryToDecimal(bin1); // Convert binary to decimal
        int num2 = BinaryToDecimal(bin2);
        int sum = num1 + num2; // Perform addition
        return DecimalToBinary(sum); // Convert result back to binary
    }

    // Function to perform binary subtraction
    static string BinarySubtraction(string bin1, string bin2)
    {
        int num1 = BinaryToDecimal(bin1); // Convert binary to decimal
        int num2 = BinaryToDecimal(bin2);
        int difference = num1 - num2; // Perform subtraction
        return DecimalToBinary(difference); // Convert result back to binary
    }

    // Function to perform binary multiplication
    static string BinaryMultiplication(string bin1, string bin2)
    {
        int num1 = BinaryToDecimal(bin1); // Convert binary to decimal
        int num2 = BinaryToDecimal(bin2);
        int product = num1 * num2; // Perform multiplication
        return DecimalToBinary(product); // Convert result back to binary
    }

    static void Main()
    {
        string bin1 = "1010"; // Binary for 10
        string bin2 = "110";  // Binary for 6

        // Perform operations and display results
        Console.WriteLine("Addition: " + BinaryAddition(bin1, bin2));         // Output: "10000"
        Console.WriteLine("Subtraction: " + BinarySubtraction(bin1, bin2));   // Output: "100"
        Console.WriteLine("Multiplication: " + BinaryMultiplication(bin1, bin2)); // Output: "111100"
    }
}
