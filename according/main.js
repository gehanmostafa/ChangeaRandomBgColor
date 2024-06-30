let allpulses = document.querySelectorAll("#pluse")

console.log(allpulses);
allpulses.forEach(
    (item) => {
        item.addEventListener(
            
            "click", (eo) => {
                 
                let content = eo.target.parentElement.parentElement.getElementsByClassName("content")[0]
                content.classList.toggle("active");
      
                if (content.classList.contains("active")) {
                    console.log(item.innerHTML);
                    item.innerText = "__";
                    content.style.height = `${content.scrollHeight}px`
                    
                } else {
                    item.innerText = "+"
                    content.style.height = `${0}px`
                    
                }
            
          }
          
        )
       
    }
    
)