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

let sumArr = [];

if(arr[0] === undefined) {

  return sumArr;

} else {

  sumArr.push(arr[0]);

};
for (let i = 1; i < arr.length; i++) {

    sumArr.push(sumArr[i -1] + arr[i])

}

return sumArr;

//time complexity O(n)
//space comeplexity O(n)

}

const evenNumOfChars = arr => {

//create a count variable
let count = 0;

//loop through arr
for (let i = 0; i < arr.length; i++) {

//store arr val in variable
      let string = arr[i];

//ask if arr val length mod 2 is zero
  if(string.length % 2 === 0) {

//if yes increment count
        count++;

  }

}
//return count

return count;

//time complexity O(n)
//space complexity O(1)

};

const smallerThanCurr = arr => {

  //create empty arr
  //create count variable
  //iterate through arr
  //store current val in variable
  //ask if curr val in arr is

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
