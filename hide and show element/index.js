let parent = document.getElementById("parent");
let child = document.getElementById("child");
parent.addEventListener(
  "mousemove", (no) => {
    child.style.display="block";
    }
)
parent.addEventListener(
   "mouseout", (no) => {
      child.style.display="none";
    }
    
)