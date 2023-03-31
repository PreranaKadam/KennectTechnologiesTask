// Question-
// Given a number x, find out if it is prime number or not, use javascript and find out the difference between next prime number after x and x

// Solution-

//To check whether given number is prime or not
function isPrime(x) {
    if (x < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  //To find next prime number of given number
  function findNextPrime(x) {
    let nextPrime = x + 1;
    while (!isPrime(nextPrime)) {
      nextPrime++;
    }
    return nextPrime;
  }
  
  //Function to find out difference between given number and next prime number
  function findPrimeDifference(x) {
    let nextPrime = findNextPrime(x);
    return nextPrime - x;
  }
  
  //Given number to check prime or not
  let x = 22; 
  if (isPrime(x)) {
    console.log(x + " is a prime number");
  } else {
    console.log(x + " is not a prime number");
  }
  let nextPrimeNo = findNextPrime(x);
  console.log("Next Prime number after " + x + " is " + nextPrimeNo);
  let difference = findPrimeDifference(x);
  console.log("The difference between the next prime number after " + x + " and " + x + " is " + difference);
  