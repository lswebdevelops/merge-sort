const arr1 = [124423, 453423, 3, 234452,32, 234,252453423, 49, 8457]
//using sort> 
let newSortedArray = arr1.sort(function(a,b){
    return a - b;
})
console.log(newSortedArray);


// merge sorting an array using recursion 
const arr = [123, 3423, 3, 2342,32, 234,23423, 9, 87]
function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left, right) {
    const result = [];
  
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  
    return result.concat(left, right);
  }

const sortedArr = mergeSort(arr);
console.log(sortedArr);