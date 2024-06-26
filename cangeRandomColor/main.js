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

/////////////////////////
// another way change the section
// const bgColor = ["black" , "green" ,"red"];
// const bgSection = document.querySelectorAll("section") ;//foreach()
// const changeBgSection =   document.getElementById("changeBgSection");
// let i =0 ;
// const lengthArray= bgColor.length-1;
// console.log(lengthArray )
// changeBgSection.addEventListener(
//     "click" ,
//     (eo) => {
//        bgSection.forEach(
//         (item) => {
//                 item.style.backgroundColor =  bgColor[i];
//              console.log(i)       }
//        );
//        i++ 
//        if(i>lengthArray){
//         i= 0 ;
//             }
    
//     }
    

// );
// using if_else


// changeBgSection.addEventListener(
//     "click" ,
//     (eo) => {
//        bgSection.forEach(
//         (item) => {
//                 item.style.backgroundColor =  bgColor[i];
//              console.log(i)       }
//        );
     
//     //    if(i<lengthArray){
//     //     i++ 
//     //         }
//     //         else{
//     //             i=0;
//     //         }
//     i<lengthArray ? i++ : i=0;
    
//     }
    

// );
//////////////////// another code random bg from a known array 
//another way change the section
const bgColor = ["black" , "green" ,"red" , "#708bba"];
const bgSection = document.querySelectorAll("section") ;//foreach()
const changeBgSection =   document.getElementById("changeBgSection");


//or 
//let rondomColor = Math.round(Math.random() * bgColor.length-1);
changeBgSection.addEventListener(

    "click" ,
    (eo) => {
        let rondomColor = Math.floor(Math.random()*(bgColor.length));
       bgSection.forEach(
        (item) => {
                item.style.backgroundColor = bgColor[rondomColor]  ;
                console.log(bgColor[rondomColor] );
                  }
       );
        }
);
