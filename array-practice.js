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
  let smallCount = [];


  //iterate through arr
  for (let i = 0; i < arr.length; i++) {

     //create count variable
  let count = 0;

  //store current val in variable
      let originalCurr = arr[i];

  //iterate through same loop again
      for (let j = 0; j < arr.length; j++) {

          let compareValue = arr[j];

  //ask if original current variable is less than new curr val
              if(originalCurr > compareValue) {

  //if yes increment count
                      count++

              }

            }

              //in original loop send count to arr
            smallCount.push(count);

          }

  //return arr
        return smallCount;

        //time complexity O(n^2)
        //space complexity O(n)

};

const twoSum = (arr, target) => {

  //loop through the arr
  for (let i = 0; i < arr.length; i++) {

  //store curr va in variable
  let currVal = arr[i];

  //loop through same arr again
    for (let j = 0; j < arr.length; j++) {

  //store new curr in variable
        let newCurrVal = arr[j];

  //ask if old curr + new curr equal target
        if(currVal + newCurrVal === target) {

  //if yes return true
              return true;

        }

      }

    }

  //otherwise false
  return false;

  //time complexity O(n^2)
  //space complexity O(1);

};

const secondLargest = arr => {

  // Your code here
};

const shuffle = (arr) => {

  // Your code here
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
