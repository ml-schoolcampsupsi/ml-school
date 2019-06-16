const DELTA = 70

var h1s = document.querySelectorAll("h1")
var h2s = document.querySelectorAll("h2")

// for (let i=0; i<h1s.length; i++) {
//     const h1 = h1s[i]
//     const n = (Math.floor(Math.random()*5)-1)*DELTA
//     h1.nextElementSibling.style.transform = "translateX(" + n + "px)"
// }

for (let i=0; i<h2s.length; i++) {
    const h2 = h2s[i]
    const n = (Math.floor(Math.random()*5)-1)*DELTA
    h2.style.transform = "translateX(" + n + "px)"    
    h2.nextElementSibling.style.transform = "translateX(" + n + "px)"
}
