/* 
 Given an array of integers `num` and a target.
 find the index that returns a sum of the target

 e.g 
 arr = [2,7,11,15] target = 9
 */


function targetSum(arr, target){
    let tarSum = []
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (tarSum.length < 2) {
                if (arr[j] == diff) {
                    tarSum.push(i,j)
                }
            }
        }
    }
    return tarSum
}

console.log(targetSum([5,24,14,16], 30))



