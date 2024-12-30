# Function to convert a binary string to a decimal integer
def binary_to_decimal(binary):
    return int(binary, 2)  # Convert binary string to integer using base 2

# Function to convert a decimal integer to a binary string
def decimal_to_binary(decimal):
    return bin(decimal)[2:]  # Convert integer to binary string, remove the '0b' prefix

# Function to perform binary addition
def binary_addition(bin1, bin2):
    num1 = binary_to_decimal(bin1)  # Convert binary to decimal
    num2 = binary_to_decimal(bin2)
    sum_result = num1 + num2  # Perform addition
    return decimal_to_binary(sum_result)  # Convert the result back to binary

# Function to perform binary subtraction
def binary_subtraction(bin1, bin2):
    num1 = binary_to_decimal(bin1)  # Convert binary to decimal
    num2 = binary_to_decimal(bin2)
    difference = num1 - num2  # Perform subtraction
    return decimal_to_binary(difference)  # Convert the result back to binary

# Function to perform binary multiplication
def binary_multiplication(bin1, bin2):
    num1 = binary_to_decimal(bin1)  # Convert binary to decimal
    num2 = binary_to_decimal(bin2)
    product = num1 * num2  # Perform multiplication
    return decimal_to_binary(product)  # Convert the result back to binary

# Example usage
bin1 = "1010"  # Binary for 10
bin2 = "110"   # Binary for 6

# Perform operations and display results
print("Addition:", binary_addition(bin1, bin2))         # Output: "10000"
print("Subtraction:", binary_subtraction(bin1, bin2))   # Output: "100"
print("Multiplication:", binary_multiplication(bin1, bin2))  # Output: "111100"
