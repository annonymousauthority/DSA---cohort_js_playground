// Linear Search

function findValue(arr, value) {
  for (val in arr) {
    if (val == value) {
      return true;
    }
  }
  return false;
}

// Find or Search for the value 1
// Big-O --> O(n)

const arrangedList = [1, 2, 3, 5, 5, 6, 7, 7, 10, 20, 30, 100];

// Binary Search

const sortedList = [10, 20, 30, 40, 50, 55, 800, 900, 1000];

const attendance = ["Adedeji", "Dina", "Ibukunolu"];

function binaryFindValue(arr, value) {
  let lowIndex = 0;
  let highIndex = arr.length - 1;

  while (lowIndex <= highIndex) {
    let midIndex = math.Floor((lowIndex + highIndex) / 2);

    if (arr[midIndex] == value) {
      return true;
    } else if (value > arr[midIndex]) {
      lowIndex = midIndex;
    } else {
      highIndex = midIndex;
    }
  }

  return -1;
}

const list = [20, 2, 3, 10, 20, 30, 100, 5, 5, 6, 7, 7, 1]; //unsorted

function bubbleSwap(array, indexa, indexb) {
  var temp = array[indexa];
  array[indexa] = array[indexb];
  array[indexb] = temp;
}

function arrangeBubble(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j <= arr.length - 1; j++) {
      if (arr[i] < arr[j]) {
        console.log(arr[i], arr[j]);
        bubbleSwap(arr, i, j);
      }
    }
  }
  return arr;
}

let sortedArray = arrangeBubble(list);
console.log(sortedArray);
