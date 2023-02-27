// variable of array of integers:
const arr = [23,4324,345342,4,32452345,324523,234523,1276,76867,2345,8976,4,2,123,3]
// merge sorting an array using recursion
// create a function to merge items.
function mergeSort(arr){
  // check if array has just 1 or zero items
  if(arr.length <= 1){
    return arr;
  }
  // create a variable that represents half of the array
  let mid = Math.floor(arr.length /2)
  // console.log(mid);//7
  // pick the left part
  let leftPart = arr.slice(0, mid)
  // console.log(leftPart); // (7) [23, 4324, 345342, 4, 32452345, 324523, 234523]
  // pich the right part
  let rightPart = arr.slice(mid);
  // console.log(rightPart);//(8) [1276, 76867, 2345, 8976, 4, 2, 123, 3]  
  // console.log(arr);//(15) [23, 4324, 345342, 4, 32452345, 324523, 234523, 1276, 76867, 2345, 8976, 4, 2, 123, 3]

  // merge the items from left and right using merge function declared below
  return merge(mergeSort(leftPart), mergeSort(rightPart));


 }

// function merging left and right
function merge(left, right){
  // variable result to store the items sorted.
  let result = []
  // while we have a length of left and right do..
  while(left.length && right.length){
    // if the leftiest  item in the array is less or iquals to the [0] item of the r.array
    if(left[0] <= right[0]){
      //This line adds the smallest value in left to the result array and removes it from the left array using the shift() method.
      result.push(left.shift())
    }
    // else if bigger, add the item to the right part of the variable result
    else{
      result.push(right.shift())
    }
    
  }
  // concatenate the left/right result
  return result.concat(left, right)
}
// variable sortedArr receives the sorted array after passing through function
const sortedArr = mergeSort(arr);
 // prints it to the console: 
console.log(sortedArr);