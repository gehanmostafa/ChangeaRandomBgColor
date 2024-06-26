const btn = document.getElementsByTagName("button") [0];
const h2 = document.getElementsByTagName("h2") [0];
  const changecolor = () => {
    return Math.round(Math.random()*360)
  }
  
btn.addEventListener(
    "click", (item) => {
      h2.style.color =  `hsl(${changecolor()} , 44% , 60%)`
    }
    
 )