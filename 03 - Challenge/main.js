// Input


let numbers = [15.60, 2, 2, 2, 4, 5, true, true, 7, "A", 2, false, 2, 8, 9];



function Remove(){
let MySet = new Set(numbers)

let newArray = Array.from(MySet)


return newArray.filter((ele)=>{
    if(typeof ele === "boolean"){
        return "false"
    }else if (typeof ele === "number"){
        return ele

    }
}).map((e)=>{
    if(e === true){

        return e = 1

    }else if (e === false){
        return e = 0
    }else if (e % 1 !== 0){
       return  Math.floor(e)         

    }
    else {
        return e
    }
}).sort().reverse()


}

console.log(Remove())


// Output
// 15
// 9
// 8
// 7
// 5
// 4
// 2
// 1
// 0