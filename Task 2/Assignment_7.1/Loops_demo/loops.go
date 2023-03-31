package main

import (
	"fmt"
)

func main() {
	// for loop -  a loop that runs 5 times and prints out the variable i each time.
	for i := 0; i < 5; i++ {
		fmt.Println(i)
	}

	fmt.Println("----------")
	// while loop - a loop that runs as long as the variable j is less than 5 and prints value of j each time
	j := 0
	for j < 5 {
		fmt.Println(j)
		j++
	}

	fmt.Println("----------")
	// continue statement - skip the execution of an iteration when the loop variable k is equal to 3
	for k := 0; k < 5; k++ {
		if k == 3 {
			continue
		}
		fmt.Println(k)
	}

	fmt.Println("----------")
	// if-else statement - To print a message whether the variable a is less than 10 or not.
	a := 5
	if a < 10 {
		fmt.Println("a is less than 10")
	} else {
		fmt.Println("a is greater than or equal to 10")
	}

	fmt.Println("----------")
	// switch statement - To compare the variable b to different cases and prints message of the matching case.
	//In this example, since b is equal to 2, the output will be "b is 2".
	b := 2
	switch b {
	case 1:
		fmt.Println("b is 1")
	case 2:
		fmt.Println("b is 2")
	default:
		fmt.Println("b is neither 1 nor 2")
	}
}
