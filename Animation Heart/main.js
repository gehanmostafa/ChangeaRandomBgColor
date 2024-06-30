let btn = document.querySelector('button'); 

let parent = document.querySelector('div');
let fRandom = () => {
  let parentHeart = document.createElement("div");
parent.append(parentHeart);
    let clear=setInterval(() => {
    let Heart = document.createElement("div")
    parentHeart.append(Heart);
    Heart.classList.add("leftRandom")
    Heart.innerHTML = "&#128156;"
    Heart.style.left = `${
      Math.random()*100
    }%`
  }
      , 200)
  setTimeout(() => {
    clearInterval(clear)
  } , 5000
  )
  setTimeout(

    () => {
      parentHeart.remove()

    }
     , 2050
  )
  
}

btn.addEventListener(
  "click", () => {
    fRandom()
  }
  
)

   