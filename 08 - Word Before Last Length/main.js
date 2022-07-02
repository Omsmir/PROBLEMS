function wordBeforeLastLength(sentence) {
   let array = sentence.split(" ").filter((ele)=>{
           return (ele.length > 2 ? ele : "")
        })
        console.log(array)
   if(array.length >= 3){
    return  array[array.length - 2].length
   }else if (array.length  == 2){
    return array[0]
}
   else if(array.length < 3){
        return false
   }
  }
  
  console.log(wordBeforeLastLength("Hello Elzero    Web   School  ")); // Web => 3