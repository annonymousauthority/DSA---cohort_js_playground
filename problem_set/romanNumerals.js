/*
Convert roman numerals to integers

I = 1
  V = 5
  X = 10
  L = 50
  C = 100
  D = 500
  M = 1000
e.g.
  IV = 4
  XI = 11
  IX = 9

  CM = 900
  MD = 1500
  XL = 40
  LX = 60

*/


function convertRomanNumerals(value){
    let integer = 0
    let previousValue = 0
    let defaultRoman = {I: 1, V: 5, X:10,L:50, C:100, D:500, M:1000}
    
    for (let i = value.length - 1; i >=0; i--) {
        let currentValue = defaultRoman[value[i]]
        
        if (currentValue >= previousValue) {
            integer += currentValue
        }else{
            integer -= currentValue
        }
        previousValue = currentValue
    }
    return integer
}

console.log(convertRomanNumerals("DDXIIVMCV"))