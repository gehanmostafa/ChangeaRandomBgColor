const changeColor = document.getElementById("changeColor")
const nav = document.getElementById("nav");
const changeBgTitle = document.getElementById("changeBgTitle")
const changeBg1Title = document.getElementsByClassName("changeBgTitle")[0];
const changeBg2Title = document.getElementsByClassName("changeBgTitle")[1];
const changeBgTitleall = document.querySelectorAll(".changeBgTitle") //foreach()
// change a rondom backgroundcolor
changeColor.addEventListener(
    "click", (no) => {
        const random = Math.round(Math.random() * 360);
        nav.style.backgroundColor = `hsl(${random} , 33% , 40%)`;

    }

);
// change a rondom backgroundcolor to title 
// changeBgTitle.addEventListener(
//     "click",(no) => {
//         const random= Math.round(Math.random()*360); 
//    changeBg1Title.style.backgroundColor=`hsl(${random} , 33% , 40%)` ;
//    changeBg2Title.style.backgroundColor=`hsl(${random} , 33% , 40%)` ;
//     }

// );
//another code to change bg title 
changeBgTitle.addEventListener(
    "click", (co) => {
        const random = Math.round(Math.random() * 360);
        changeBgTitleall.forEach(
            (item) => {
                item.style.backgroundColor = `hsl(${random} , 33% , 40%)`;
            }

        )
    }

)