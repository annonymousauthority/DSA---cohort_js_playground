/*
needle in a haystack problem
find needle in the haystack
return -1 if needle isn't found
e.g 
  haystack='photobooth' needle='photo'
    return 0
    haystack='random' needle='dom'
    return 3
 */

function needleInHaystack(haystack, needle){

    let extracted = '' 
    let firstIndex 
    for (let i = 0; i < needle.length; i++) {

        for (let j = 0; j < haystack.length; j++) {

            if (needle[i] == haystack[j]) {
                if (i < j) {
                    break
                }else{
                    extracted += haystack[j]
                if (firstIndex == undefined) {
                    firstIndex = j
                }
                break
                }
            }
            
        }
    }
    console.log(needle, extracted)
    if (needle === extracted) {
        return firstIndex
    }else{
        return -1
    }
}

const haystack_ = "leetcodes"
const needle_ = "leetos"

console.log(needleInHaystack(haystack_, needle_))