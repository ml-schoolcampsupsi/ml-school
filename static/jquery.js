var righe = document.querySelectorAll("tr")
var n = righe.length
var numeri = []
for (let i = 0; i < righe.length; i++) {    
    righe[i].onmouseover = function() { 
        var r = getCurrentRotationFixed(this);       
        r += Math.random()*6-3;
        this.style.transform = "rotate(" + r + "deg)"
    }
}
  
  function getCurrentRotationFixed( el ) {    
    var st = window.getComputedStyle(el, null);
    var tr = st.getPropertyValue("-webkit-transform") ||
         st.getPropertyValue("-moz-transform") ||
         st.getPropertyValue("-ms-transform") ||
         st.getPropertyValue("-o-transform") ||
         st.getPropertyValue("transform") ||
         "fail...";
  
    if( tr !== "none") {      
  
      var values = tr.split('(')[1];
        values = values.split(')')[0];
        values = values.split(',');
      var a = values[0];
      var b = values[1];
      var c = values[2];
      var d = values[3];
  
      var scale = Math.sqrt(a*a + b*b);
      var radians = Math.atan2(b, a);
      if ( radians < 0 ) {
        radians += (2 * Math.PI);
      }
      var angle = Math.round( radians * (180/Math.PI));      
      
    } else {
      var angle = 0;
    }
    
    return angle    
  }