const DELTA = 70
var flip = true

if (window.innerWidth > 700) {
    var h2s = document.querySelectorAll("h2")

    for (let i=0; i<h2s.length; i++) {
        const h2 = h2s[i]
        const n = (Math.floor(Math.random()*5)-1)*DELTA
        h2.style.transform = "translateX(" + n + "px)"    
        h2.nextElementSibling.style.transform = "translateX(" + n + "px)"

        var r = Math.random()
        var r1 = Math.random()
        if (r>r1 && flip) {
            h2.className += " ziggato"
            flip = !flip
        }
    }
}


// var h1s = document.querySelectorAll("h1")
// for (let i=0; i<h1s.length; i++) {
//     const h1 = h1s[i]
//     const n = (Math.floor(Math.random()*5)-1)*DELTA
//     h1.nextElementSibling.style.transform = "translateX(" + n + "px)"
// }