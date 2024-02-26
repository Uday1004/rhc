class solution:
    def revers_str(self ,n):
        if n == n[::-1]:
            return 'yes'
        else:
            return 'No'
    
hello = solution()
result = hello.revers_str('ss')
print(result)


