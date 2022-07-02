let select = document.querySelectorAll("select option")
let p = document.querySelector("p")



select.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        if(ele.classList.contains("arial")){
            p.style.cssText = "font-family: Arial;"
        }else if(ele.classList.contains("cursive")){
            p.style.cssText = "font-family: cursive;"
        }else if(ele.classList.contains("metal")){
            p.style.cssText = "font-family: metal mania;"
        }
    })
})