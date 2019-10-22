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

// const DELTA = 70
// var flip = true

// if (window.innerWidth > 700) {
//     var h2s = document.querySelectorAll("h2")

//     for (let i=0; i<h2s.length; i++) {
//         const h2 = h2s[i]
//         const n = (Math.floor(Math.random()*5)-1)*DELTA
//         h2.style.transform = "translateX(" + n + "px)"    
//         h2.nextElementSibling.style.transform = "translateX(" + n + "px)"

//         var r = Math.random()
//         var r1 = Math.random()
//         if (r>r1 && flip) {
//             h2.className += " ziggato"
//             flip = !flip
//         }
//     }
// }


// var h1s = document.querySelectorAll("h1")
// for (let i=0; i<h1s.length; i++) {
//     const h1 = h1s[i]
//     const n = (Math.floor(Math.random()*5)-1)*DELTA
//     h1.nextElementSibling.style.transform = "translateX(" + n + "px)"
// }