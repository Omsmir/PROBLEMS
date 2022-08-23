/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {

    let array = Array.from(s.toUpperCase())
 
    const obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    
const newObj = {}

    for(let key in obj){

        if(s.match(key)){
        console.log(obj[key])
        }
    }

};


romanToInt("IV")