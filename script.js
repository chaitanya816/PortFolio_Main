
const menuIcon = document.querySelector(".menu");
const crossIcon = document.querySelector(".cross");
let mode = "open";
const width1 = document.querySelector("body").clientWidth;



menuIcon.addEventListener("click", () => {

    menuIcon.onclick = () => {

        if (mode == "open") {

            mode = "close";

            document.querySelector(".container").style.visibility = "visible";
            document.querySelector(".menuIcon").style.visibility = "hidden";

            document.querySelector(".crossIcon").style.visibility = "visible";



        }
        else if (mode == "close") {

            mode = "open";

            document.querySelector(".container").style.visibility = "hidden";
            document.querySelector(".menuIcon").style.visibility = "visible";

            document.querySelector(".crossIcon").style.visibility = "hidden";


        }

    }
    crossIcon.onclick = () => {

        if (mode == "open") {

            mode = "close";

            document.querySelector(".container").style.visibility = "visible";
            document.querySelector(".menuIcon").style.visibility = "hidden";

            document.querySelector(".crossIcon").style.visibility = "visible";



        }
        else if (mode == "close") {

            mode = "open";

            document.querySelector(".container").style.visibility = "hidden";
            document.querySelector(".menuIcon").style.visibility = "visible";

            document.querySelector(".crossIcon").style.visibility = "hidden";


        }

    }




})


let clip = document.querySelector(".Netflixvdo") 
  

clip.addEventListener("mouseover", function (e) { 
    clip.play(); 
}) 

clip.addEventListener("mouseout", function (e) { 
    clip.pause(); 
}) 


let clip1 = document.querySelector(".domvdo") 
  

clip1.addEventListener("mouseover", function (e) { 
    clip1.play(); 
}) 

clip1.addEventListener("mouseout", function (e) { 
    clip1.pause(); 
}) 

let clip2 = document.querySelector(".codecrafthub") 
  

clip2.addEventListener("mouseover", function (e) { 
    clip2.play(); 
}) 

clip2.addEventListener("mouseout", function (e) { 
    clip2.pause(); 
}) 


let clip3 = document.querySelector(".paytmvdo") 
  

clip3.addEventListener("mouseover", function (e) { 
    clip3.play(); 
}) 

clip3.addEventListener("mouseout", function (e) { 
    clip3.pause(); 
}) 

