let boxes=document.querySelectorAll("#box")
let arr=[ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let  turn=true;
let result=0
boxes.forEach((box)=>
    box.addEventListener("click",()=>{  
        result++;
        console.log(result)   
    if(turn){
        box.innerHTML="O"
        turn=false
    }  else{
        box.innerHTML="X"
        turn=true
    }
    box.disabled=true;
    checkwinner();

})
)

const checkwinner=()=>{
    for(let row of arr){
        let val1=box[row[0]].innerText
        let val2=box[row[1]].innerText
        let val3=box[row[2]].innerText
   if(val1!=='' && val2!=='' && val3!==''){
    if(val1===val2 && val2===val3){
      console.log(`winner is ${val1}`)
      document.querySelector("#foot").innerText=`GAME OVER winnwr is ${val1}`
      disable()        
      }
    
    else{
        if(result===9)
            document.querySelector("#foot").innerText="TIE"
    }
  }}
}

const disable=()=>{
    // boxes.forEach((box)=>box.disabled=true)
    for(box of boxes){
        box.disabled=true
    }
}




