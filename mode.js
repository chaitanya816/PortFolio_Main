let Screenmode = "light";

const modeon = document.querySelector(".modeon")
const modeoff = document.querySelector(".modeoff")

modeoff.addEventListener("click", () => {

    modeoff.onclick = () => {


        if (Screenmode == "light") {
            Screenmode = "dark"


            document.querySelector(".modeon").style.visibility = "visible";
            document.querySelector(".modeoff").style.visibility = "hidden";

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
            document.querySelector(".modeoff").style.visibility = "visible";

        }


    }
})