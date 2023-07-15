/*
    A sorted array of distinct integer and 
    target value

    return index where it is or index where it'll
    be

    e.g arr = [10,20,30,40,50,60] target = 35

    e.g arr = [2,4,6,8,10,12,14,16,18] 
    target = 15
 */

function findTarget(arr, target){
    let location 
    let lowIndex = 0, highIndex = arr.length - 1

    while (lowIndex <= highIndex) {
        let midIndex = Math.floor((lowIndex + highIndex) / 2)
        if (arr[midIndex] == target) {
            location = midIndex
        }else if (arr[midIndex] < target){
            lowIndex = midIndex + 1
        }else{
            highIndex = midIndex - 1
        } 
    }
    return location
}


console.log(findTarget([2,4,6,8,10,12,14,16,18], 15))
