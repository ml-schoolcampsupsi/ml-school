console.log("%c • L • ~ another cool website by your pals at oio.studio", "color:aquamarine;font-size: 21px")
console.log("%c https://oio.studio", "color:coral;font-size: 21px")
console.log("%c ", "color:blue;font-size: 21px")

let cols = ['orange','violet','cyan']
let chars = ['//', '>_', '.']

document.addEventListener("DOMContentLoaded", (event) => {              

    Array.from(document.getElementsByTagName("h3")).map(h3 => h3h3(h3))    

    // horrible fix for a horrible framework. 
    // don't use hugo please, let it disappear
    // as just another human mistake, 
    // washed out by the unfolding of history
    Array.from(document.querySelector("footer").getElementsByTagName("a")).map(a => {
        if (!a.hasAttribute("href")) a.parentNode.removeChild(a)
    })   

})


// FUNCTIONS
// FUNCTIONS
// FUNCTIONS
let h3h3 = el => {    
    var col = cols[~~(Math.random()*cols.length)]    
    var char = chars[~~(Math.random()*chars.length)]    
    el.className+=(" "+col+"h3")
    el.innerHTML = char+el.innerHTML    
}

let sbunna = (section, D) => {    
    const n = (Math.floor(Math.random()*D*2))-D
    section.style.transform = "translateX(" + n + "px)"
}

let hackz = (stringa) => {
    let words = stringa.split(" ")    
    if (words.length === 2) {        
        if (words[0] == 'background') {            
            document.body.style.backgroundColor = ""+words[1]
        }
        if (words[0] == 'color') {            
            document.body.style.color = ""+words[1]
        } 
        
        if (words[0] == 'rotate') {            
            document.body.style.transform += "rotate("+words[1]+"deg)"
        } 
    }
    
    if (stringa == "flipx") {        
        document.body.style.transform += " scaleX(-1)"
    }

    if (stringa == "flipy") {        
        document.body.style.transform += " scaleY(-1)"
    }

}