function hasTargetSum(array, target) {
  // Write your algorithm here
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
          return true;
        }
      }
    }
    return false;
}

/* 
  Write the Big O time complexity of your function here
  Big O time complexity: O(n^2) - where n is the number of elements in the array
*/

/* 
  Add your pseudocode here
  1. Iterate through each number in the array.
  2. For each number, iterate through the remaining numbers in the array.
  3. Check if the current number and any other number in the array adds up to the target.
  4. If a pair is found, return true.
  5. If no pair is found after checking all combinations, return false.

*/

/*
  Add written explanation of your solution here
    This function iterates through each pair of numbers in the array (excluding duplicates) and checks if their sum equals the target. If a pair is found, it returns true. If no pair is found after checking all combinations, it returns false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
