const findMinimum = arr => {

  //time complexity O(n)
  //space complexity O(1)

  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {

    if(arr[i] < smallest) {

      smallest = arr[i];

    }

  }

  return smallest;

};

const runningSum = arr => {

let numsArr = arr;

  let reduced = numsArr.reduce((acc, num) => {

      return acc += num;

  });

  return reduced;
};

const evenNumOfChars = arr => {

  // Your code here
};

const smallerThanCurr = arr => {

  // Your code here

};

const twoSum = (arr, target) => {

  // Your code here
};

const secondLargest = arr => {

  // Your code here
};

const shuffle = (arr) => {

  // Your code here
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
