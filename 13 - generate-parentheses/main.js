/**
 * @param {number} n
 * @return {string[]}
 */


 let shapes = ["((()))","(()())","(())()","()(())","()()()"]

 var generateParenthesis = function(n) {

    let array = []
    const  leftParenthe = "("
    const RightParenthe = ")"
    let secShape = true

    let num = n
    if(n == 1){
        
        return leftParenthe.repeat(num) + RightParenthe.repeat(num)

    }else {
        for(let i = 0 ; i <= num ; i++){
            let o;

            function Uarny(leftParenthe,RightParenthe,n ){
                let f
                let s

                if(n == 2){ // shap num ..
                    f = leftParenthe[i]
                    s = RightParenthe[i]
                    o = (f + s)
                    o.repeat(num)
                    
                     return  o.split('')
                }

            }

          o =  Uarny(leftParenthe,RightParenthe,2) 

            
            if(!secShape){
                return o.repeat(num) 

            }else if(secShape){
                return o 

            }

        }
    }
    
};

console.log(generateParenthesis(3))

