let Screenmode = "light";

const modeon = document.querySelector(".modeon")
const modeoff = document.querySelector(".modeoff")

modeoff.addEventListener("click", () => {

    modeoff.onclick = () => {


        if (Screenmode == "light") {
            Screenmode = "dark"


            document.querySelector(".modeon").style.visibility = "visible";
            document.querySelector(".modeoff").style.visibility = "hidden";
            document.querySelector("body").style.backgroundColor = "#1F2833";
            document.querySelector(".mainContainer").style.backgroundColor = "black";
            document.querySelector(".eduConatiner").style.backgroundColor = "black";
            document.querySelector(".designation").style.color = "white";
            document.querySelector(".aboutNetflixProject").style.backgroundColor = "black";
            document.querySelector(".aboutNetflixProject").style.color = "white";
            document.querySelector(".aboutdomProject").style.backgroundColor = "black";
            document.querySelector(".aboutdomProject").style.color = "white";
            document.querySelector(".aboutpaytmProject").style.backgroundColor = "black";
            document.querySelector(".aboutpaytmProject").style.color = "white";
            document.querySelector(".aboutcodecrafthub").style.backgroundColor = "black";
            document.querySelector(".header").style.backgroundColor = "	#36454F";
            document.querySelector(".aboutcodecrafthub").style.color = "white";
            document.querySelector(".edu").style.color = "white";
            document.querySelector(".aboutEdu10").style.color = "white";
            document.querySelector(".aboutEdu12").style.color = "white";
            document.querySelector(".aboutEdubt").style.color = "white";
            document.querySelector(".menu").style.color = "white";
            document.querySelector(".cross").style.color = "white";
            document.querySelector(".fa-house").style.color = "white";
            document.querySelector(".fa-school").style.color = "white";
            document.querySelector(".fa-gears").style.color = "white";
            document.querySelector(".fa-list-check").style.color = "white";
            document.querySelector(".fa-phone").style.color = "white";
            document.querySelector(".fa-toggle-on").style.color = "white";
            document.querySelector(".fa-toggle-off").style.color = "white";
            document.querySelector(".itemContent1").style.color = "white";
            document.querySelector(".itemContent2").style.color = "white";
            document.querySelector(".itemContent3").style.color = "white";
            document.querySelector(".itemContent4").style.color = "white";
            document.querySelector(".itemContent5").style.color = "white";
            
            
            
            
        }
        else if (Screenmode == "dark") {
            
            Screenmode = "light"
            
            document.querySelector(".modeon").style.visibility = "hidden";
            document.querySelector(".modeoff").style.visibility = "visible";
            
        }
        
        
    }
})

modeon.addEventListener("click", () => {
    
    modeon.onclick = () => {
        
        
        if (Screenmode == "light") {
            Screenmode = "dark"
            
            
            document.querySelector(".modeon").style.visibility = "visible";
            document.querySelector(".modeoff").style.visibility = "hidden";
            
        }
        else if (Screenmode == "dark") {
            
            Screenmode = "light"
            
            document.querySelector(".modeon").style.visibility = "hidden";
            document.querySelector("body").style.backgroundColor = "white"
            document.querySelector(".modeoff").style.visibility = "visible";
            document.querySelector(".mainContainer").style.backgroundColor = "white";
            document.querySelector(".designation").style.color = "black";
            document.querySelector(".aboutNetflixProject").style.backgroundColor = "white";
            document.querySelector(".aboutNetflixProject").style.color = "black";
            document.querySelector(".aboutdomProject").style.backgroundColor = "white";
            document.querySelector(".aboutdomProject").style.color = "black";
            document.querySelector(".aboutpaytmProject").style.backgroundColor = "white";
            document.querySelector(".aboutpaytmProject").style.color = "black";
            document.querySelector(".aboutcodecrafthub").style.backgroundColor = "white";
            document.querySelector(".aboutcodecrafthub").style.color = "black";
            document.querySelector(".edu").style.color = "black";
            document.querySelector(".aboutEdu10").style.color = "black";
            document.querySelector(".aboutEdu12").style.color = "black";
            document.querySelector(".aboutEdubt").style.color = "black";
            document.querySelector(".eduConatiner").style.backgroundColor = "white";
            document.querySelector(".header").style.backgroundColor = "lavender";
            
            document.querySelector(".menu").style.color = "black";
            document.querySelector(".cross").style.color = "black";
            document.querySelector(".fa-house").style.color = "black";
            document.querySelector(".fa-school").style.color = "black";
            document.querySelector(".fa-gears").style.color = "black";
            document.querySelector(".fa-list-check").style.color = "black";
            document.querySelector(".fa-phone").style.color = "black";
            document.querySelector(".fa-toggle-on").style.color = "black";
            document.querySelector(".fa-toggle-off").style.color = "black";
            document.querySelector(".itemContent1").style.color = "black";
            document.querySelector(".itemContent2").style.color = "black";
            document.querySelector(".itemContent3").style.color = "black";
            document.querySelector(".itemContent4").style.color = "black";
            document.querySelector(".itemContent5").style.color = "black";
        }


    }
})