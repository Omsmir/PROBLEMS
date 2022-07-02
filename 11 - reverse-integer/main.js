var reverse = function(x) {
    let output = 0 ;
    let isNegative = false ;
    // let regex = /[0-9]/ig ;
        
    if(x < 0 ){
        isNegative = true
        x *= -1;
    }
    
    let Reverse = parseInt(String(x).split('').reverse().join(''))
    if(Reverse > Math.pow(2,31) - 1 || Reverse < Math.pow(-2,31)){
        return 0 

    }
    if(isNegative  ){
          return -1 * Reverse

    }else {
       return  Reverse
    }
   
};

// console.log(-2147483412 > -2147483648)

console.log(reverse(-120))
console.log(reverse(-2147483412))
console.log(reverse(1534236469))


// let regex = /[0-9]/ig
        
// output = x.toString()

// let Reverse = Array.from(output).reverse("")

// let Dash = Reverse.join('')

// let match = (Dash.match(regex))

// let SecJoin = (match).join("")

// let x = (-SecJoin)

// return x