# import hashlib

# def get_user_id(): 
#     str = "www.MyTecBits.com"
#     encoded_str = str.encode()

#     # create a sha1 hash object initialized with the encoded string
#     hash_obj = hashlib.sha1(encoded_str)

#     # convert the hash object to a hexadecimal value
#     hexa_value = hash_obj.digest()

#     # print
#     print("\n", hexa_value, "\n")

# get_user_id()

import random

id = "\033[37m"

for i in range(8): 
    if i <= 3: 
        id += "\033[96m"
    elif i == 4 or i == 5 or i == 6: 
        id += "\033[92m"
    elif i == 7: 
        id += "\033[91m"

    for j in range(4): 

        n = random.randrange(34)

        charset = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"
                   "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v"
                   "w", "x", "y", "z"]

        n = charset[n]

        id += n
    
    if i != 7: 
        id += "\033[37m:"
    if i == 7: 
        id += "\033[37m"

print("""
\033[96m Blue: \033[37m First 16 characters of the jointime hash 
\033[92m Green:\033[37m First 12 characters of the instance you are currently on (ex. domain.tld) 
\033[91m red:  \033[37m UNDECIDED
""")

print(" cid:", id, "\n")