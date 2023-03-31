package main

import "fmt"

func main() {
	count := 0 // variable count declared outside the closure function

	// Closure function that increments the count variable
	// increment function as an anonymous function that increments the count and print its value.
	increment := func() {
		count++
		fmt.Println("Count is ", count)
	}

	// Calling closure function multiple times
	increment()
	increment()
	increment()
}
