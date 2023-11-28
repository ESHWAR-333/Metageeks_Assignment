def is_palindrome(s):
    # Step 1: Remove non-alphanumeric characters and convert to lowercase
    cleaned_chars = []
    for char in s:
        if char.isalnum():
            cleaned_chars+=char.lower() 
    print(cleaned_chars)

    # Step 2: Join the cleaned characters into a string
    cleaned_string = ''.join(cleaned_chars)
    print(cleaned_string)

    # Step 3: Check if the cleaned string is equal to its reverse
    is_palindrome = cleaned_string == cleaned_string[::-1]

    # Step 4: Return the result
    return is_palindrome

# Example usage:
input_str = "A man, a plan, a canal, Panama!"
result = is_palindrome(input_str)
print(result)