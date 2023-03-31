
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
  let deposits = [];
  let depositsLessThan2000 = [];
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i].deposits) {
      deposits = array[i].deposits;
      for(let x = 0; x < deposits.length; x++) {
        sum += deposits[x];
      }
      if(sum < 2000)
        depositsLessThan2000.push(array[i]);
      sum = 0;
    }else{
      depositsLessThan2000.push(array[i]);
    }
  }
  return depositsLessThan2000;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
