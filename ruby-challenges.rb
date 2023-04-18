# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
# psuedocode
# I'm thinking I can use a simple if statment for this one. 

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

def even_or_odd(number)
    if number % 2 == 0
    p "#{number} is Even"
    else
    p "#{number} is Odd"
    end
end
p even_or_odd(reposts1)
p even_or_odd(reposts2)
p even_or_odd(reposts3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
# psuedocode
# input: string
# output: string with vowels removed
# will remove vowels by using (/[aeiou]/, '') 

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def removed_vowels(string)
    string.gsub(/[aeiou]/, '') 
end

p removed_vowels(beatles_album1)
p removed_vowels(beatles_album2)
p removed_vowels(beatles_album3)

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# ---> "Rbbr Sl"
# "Sgt Pppr"
# "Abby Rd"


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.
# psuedocode:
# Create a method that takes in a string and checks if the string is a palindrome. 
# input: string
# output: string
# will reverse the strings with .reverse and use if statement to check to see if the oriiginal string == the reversed string  

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def is_or_not(string)
    if string.upcase  == string.upcase.reverse
         "#{string} is a palindrome"
    else 
         "#{string} is not a palindrome"
    end
end

p is_or_not(palindrome_tester1)
p is_or_not(palindrome_tester2)
p is_or_not(palindrome_tester3)

# ---> "RACECAR is a palindrome"
# "NRAEL is not a palindrome"
# "ROTATOR is not a palindrome"
 
