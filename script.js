
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
