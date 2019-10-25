let cheatsAudio = new Audio("media/cheats.mp3")
let cheats = false

document.addEventListener("DOMContentLoaded", (event) => {      
    
    document.getElementById("cover").onclick = (e) => {        
        e.target.remove()
        document.getElementById("video-container").style.display = "block"
        document.getElementById("video-container").innerHTML = "<iframe src='https://www.youtube.com/embed/2Q1bUWRM2i0?&autoplay=1' frameborder='0' allow='autoplay; fullscreen' allowfullscreen autoplay></iframe>"

    }

    let DELTA = ((window.innerWidth-444)/2)-(window.innerWidth/12)    
    DELTA = Math.min(DELTA, 80)            

    if (window.innerWidth > 700) {
        Array.from(document.querySelectorAll("section")).map(section => sbunna(section, DELTA))        
    }    

    user.bind(secret, function() {    
        if (!cheats) {
            cheatsAudio.play()
            cheats = true 
            document.querySelector(".title .orange").className = "hacker"
            document.querySelector("#titulo").remove()
            let i = document.createElement("input")
            i.setAttribute("placeholder", "type here")
            i.onkeypress = (e) => {
                if (!e) e = window.event;
                var keyCode = e.keyCode || e.which;
                if (keyCode == '13'){
                  hackz(i.value)
                  return false;
                }
              }
            document.querySelector("#hhh").style.display = 'flex'
            document.querySelector("#hhh").appendChild(i)
        }        
    });    

})