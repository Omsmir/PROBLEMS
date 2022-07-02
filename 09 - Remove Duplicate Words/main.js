function removeDuplicate(ele){
    let split = ele.split(" ")

    
      let filter = split.filter((item, 
            index) => split.indexOf(item) === index ).join(" ");
    
  
    // let Filter = split.filter(function(el){
    //     return  el

    // })
    // let newSet = new Set(Filter)

    // let newArray = Array.from(newSet).join(" ")
    // console.log(newArray)
  console.log(filter)
}

removeDuplicate("omar samir samir omar")