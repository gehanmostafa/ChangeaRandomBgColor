let header = document.getElementById("header");
let text = header.innerHTML;
let i =1
 let autowriting =() => {
    header.innerHTML= text.slice(0,i);
    i++;
    if(text.length<i){
        i=1
    }

 }
 
setInterval(
   
   autowriting
     , 1000
)
