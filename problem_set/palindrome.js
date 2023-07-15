// Given an integer x, return true
// if x is palindrome and false 
// otherwise


// 121 

// civic, madam, radar, deified


/*
- If the spelling from the start index ==
the spelling starting from the end index

*/


function reverseString(str){
    let newStr = ""
    for (let i = str.length - 1; i > 0; i--) {
        newStr += str[i]
    }

    return newStr
} 

function palindrome(word){

    let first_half = word.slice(0, Math.floor((word.length)/2))
    let second_half = word.slice(Math.floor((word.length)/2), word.length)

    if (first_half === reverseString(second_half)) {
        return true
    }
    return false
}

console.log(palindrome("deified"))