document.addEventListener("DOMContentLoaded", function(event) {  

    let DELTA = ((window.innerWidth-444)/2)-(window.innerWidth/12)
    console.log(DELTA)
    DELTA = Math.min(DELTA, 80)
    console.log(DELTA)
    var flip = true

    if (window.innerWidth > 700) {
        var sections = document.querySelectorAll("section")

        for (let i=0; i<sections.length; i++) {
            const section = sections[i]
            const n = (Math.floor(Math.random()*DELTA*2))-DELTA
            section.style.transform = "translateX(" + n + "px)"                    
        }
    }

})

let fas = document.querySelector("footer").getElementsByTagName("a")
for(i=0; i< fas.length; i++ ) {
    if (!fas[i].hasAttribute("href")) fas[i].parentNode.removeChild(fas[i])
}