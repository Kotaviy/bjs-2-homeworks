// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] > max) {
       max = arr[i];
     } else if (arr[i] < min) {
       min = arr[i];
     }
     sum += arr[i];
   }
   let avg = (sum / arr.length);
 
   return ({ min: min, max: max, avg: avg });
 }
 console.log(getArrayParams([-99, 7, -41, 2, 77, 65, 9, -50]));

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  for (let i = 1; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }
  return max;
}
console.log(makeWork([
  [1, 2, 4, 7,], 
  [45, 3, -8],
  [35, -5, 7, 19]
], worker))

// Задание 3
function worker2(arr) {
  let maxOfArr = arr[0];
  let minOfArr = arr[0];
  for (let i = 0; i < arr.length; i++){
    if(arr[i] > maxOfArr){
    maxOfArr = arr[i];
    } else if(arr[i] < minOfArr){
      minOfArr = arr[i];
    }
    difference = maxOfArr - minOfArr;
  }
  return difference
}