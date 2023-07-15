/*
common longest prefix
if none return an empty string
if found return prefix

e.g 
arr = ["flower", "flow", "flight"]
return "fl"

arr = ["apple", "application", "append"]
return "app"
 */

function commonPrefix(arr){
    let shortWord = "" 
    let shortWordIndex = 0
    let prefixCount = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < prefixCount) {
            shortWord = arr[i]
            shortWordIndex = i
            prefixCount = arr[i].length
        }
    }
}
