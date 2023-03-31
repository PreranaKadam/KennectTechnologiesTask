package main

import "fmt"

// Recursive function to calculate the factorial of a given number
func factorial(num int) int {
	if num == 0 {
		return 1
	}
	return num * factorial(num-1)
}

func main() {
	result := factorial(5) // Calling factorial function recursively
	fmt.Println("Factorial of given number is ", result)
}
