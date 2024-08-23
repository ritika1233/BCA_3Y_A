//let mode=document.getElementById("mode")
 //function day(){
   // mode.style.background="#d2f8f8"
    //mode.style.color="black"
 //}
 //function night(){
   // mode.style.background="#444442"
    //mode.style.color="white"
 //}
 //...............
let mode=document.getElementById("mode")
let textChange=document.getElementById("textChange")
let temp=1
function daynight(){
    if (temp){
        mode.style.background="#444442"
        mode.style.color="white"
        textChange.innerText="day"
        temp=0
}
    else{
        mode.style.background="#d2f8f8"
        mode.style.color="black"
        textChange.innerText="night"
        temp=1
    }
}