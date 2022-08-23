/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
let reverse = x.toString()

let array  = Array.from(reverse)

let result = (array.reverse()).join('')

let final = parseInt(result)
    if(final == x){
        return true

    }else {
        return false
    }
    
};


console.log(isPalindrome(10))