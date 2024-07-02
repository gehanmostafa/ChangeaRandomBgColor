let pre = document.getElementById("pre")
let next = document.getElementById("next")
let parentimg = document.getElementsByClassName("parentimg")[0]
let counter = document.querySelectorAll(".counter button  ")
console.log(counter);
console.log(pre , next);
let arrImg = [
    `<img src="img/g2.jpg" alt="">`,
           ` <img src="img/g3.jpg" alt="">`,
               ` <img src="img/s1.jpg" alt="">`,
                    `<img src="img/g5.jpg" alt="">`,
    `<img src="img/g4.jpg">`
        
   
];
let arrbut = [
       `<button class="active">1</button>`,

    `<button >2</button>`,
    `<button >3</button>`,
    `<button >4</button>`,
    `<button >5</button>`

]
let i = 0 
console.log(arrImg);
next.addEventListener(
    "click", () => {
        pre.removeAttribute("disabled");
        counter.forEach(
            (item) => {
                console.log(item);
                if (item.innerHTML == i+2) {
                    item.setAttribute("class", "active")
                 
                }
                else {
                    item.removeAttribute("class")
            
                }
            }
             
         )
            
        
        i++;
        parentimg.innerHTML += arrImg[i];
        parentimg.innerHTML += `<p> ${i+1}of ${arrImg.length }</p>`
       
  
        if (i == arrImg.length - 1) {
            next.setAttribute("disabled" , "")
        }

    }
    
)
//5
//4
pre.addEventListener(
   
    "click", () => {
        counter.forEach(
            (item) => {
                console.log(item);
                if (item.innerHTML == i ) {
                    item.setAttribute("class", "active")

                }
                else {
                    item.removeAttribute("class")

                }
            }

        )
        next.removeAttribute("disabled")
        i--;
        
        parentimg.innerHTML += arrImg[i];
        parentimg.innerHTML += `<p> ${i+1}of ${arrImg.length}</p>`

      
        if (i == 0) {
           pre.setAttribute("disabled", "")
        }
      
    }

    
)
 
 
///////// click in btn 1 to 5 
counter.forEach((item, index) => {
  
    item.addEventListener(
        "click", (eo) => {
            let btnactive = document.getElementsByClassName("active")[0]
               btnactive.classList.remove("active")
            item.classList.add("active")
    console.log(index+1);
            parentimg.innerHTML += `<p> ${index + 1}of ${arrImg.length}</p>`
            parentimg.innerHTML += arrImg[index];
            if (index === 0) {
                pre.setAttribute("disabled", "")
                next.removeAttribute("disabled")
            }
             else if  (index == 4) {
                next.setAttribute("disabled", "")
                pre.removeAttribute("disabled");
            }
            else {
                pre.removeAttribute("disabled");
                next.removeAttribute("disabled")
            }
         
          
        }
        
    )
})