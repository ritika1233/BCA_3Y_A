//document.write("<h1>hello,welcome</h1><Br>")
//document.write("<h1>hello,welcome</h1><br>")
//document.write("<h1>hello,welcome</h1><br>")
//..........................................

//document.getElementById("demo").innerText="GLA UNIVERSITY"

//.........................................
let temp=1
function show(){
    if(temp){
        document.getElementById("demo").innerText="GLA UNIVERSITY"
        temp=0}
    else{
        document.getElementById("demo").innerText="Greeting"
        temp=1
    }
}