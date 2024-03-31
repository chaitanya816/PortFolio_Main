
const menuIcon = document.querySelector(".menu");
const crossIcon = document.querySelector(".cross");
let mode = "open";
const width1 = document.querySelector("body").clientWidth;

if (width1 <= 1000) {

    alert(width1)

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
}

// if (width1 >= 1001) {

//     if (mode == "close" || mode == "open") 
//     {
//         alert(width1);
//         document.querySelector(".crossIcon").style.visibility = "hidden";
//         document.querySelector(".menuIcon").style.visibility = "hidden";
//         document.querySelector(".container").style.visibility = "hidden";
//     }



}