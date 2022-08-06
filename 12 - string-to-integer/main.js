/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    
    let regex = /^[a-z]|^\.|-+/g

    let int  = s.match(regex) 
    let array = [-2147483648,2147483647]


    if(int){
        return 0

    }else if(parseInt(s) < array[0] ){
        return array[0]
    }else if(parseInt(s) > array[1]){
        return array[1]
    }else if(s) {
        return parseInt(s)
    }
    
};


console.log(myAtoi("-1"))


