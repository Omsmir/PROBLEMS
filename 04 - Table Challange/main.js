let td = Array.from(document.getElementsByTagName("td"))








function AddPoints(){
    
    let newArray = []
    let newArray1 = []
    let index = 0
    let index1 = 0
td.forEach((ele)=>{
    if(ele.classList.contains("point")){
       let pasre = +ele.innerHTML
       console.log(pasre)
         newArray.push(pasre) 
    }else if(ele.classList.contains("point1")){
        let pasre1 = +ele.innerHTML
         newArray1.push(pasre1) 
    }
 })
 for(let i = 0; i < newArray.length ; i++){
    index += newArray[i]
  
 }
 for(let i = 0; i < newArray1.length ; i++){
    index1 += newArray1[i]  
 }
td.forEach((ele)=>{
    if(ele.classList.contains("total")){
        ele.innerHTML = index
    }
})
td.forEach((ele)=>{
    if(ele.classList.contains("total-2")){
        ele.innerHTML = index1
    }
})

}

AddPoints()