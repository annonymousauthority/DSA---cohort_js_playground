/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums
 */

// Rule 1: Extract problem into full sentences.

/*
Given an integer array nums sorted in ascending order, remove the duplicates in-place such that all elements appears only once.
*/

/*
The relative order of the elements should be kept the same. Then return the number of unique elements in nums
 */

// Rule 2: Analyze the example
/* 
e.g. arr = [1,1,2] ==> [1,2]
e.g.II arr = [1,2,2,2,2,3,4,5,5,5,5,5] =>[1,2,3,4,5]
 */

function removeDuplicates(arr) {

    let arrMap = new Map()
    let result = []

  if (arr.length === 0) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    if (!arrMap.has(arr[i])) {
        arrMap.set(arr[i], arr[i]);
        result.push(arr[i]);
    }
  }
  return result;
}

//Big-O = O(n)

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4,120,121,222,222]));
