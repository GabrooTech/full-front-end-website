let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar")
let spdr = document.querySelector("#spdr")
let sbd = document.querySelector("#sbd")
let schbox = document.querySelector("#schbox")
var x = window.matchMedia("(max-width: 550px)")
function toogler(x){
  if(x.matches){
    btn.onclick = function() {
      sidebar.classList.toggle("active")
      schbox.classList.toggle("active")
    }
    spdr.onclick = function() {
      sidebar.classList.toggle("active")
      schbox.classList.toggle("active")
    }
  }
}
toogler(x)
x.addListener(toogler)
btn.onclick = function() {
  sidebar.classList.toggle("active")
}
spdr.onclick = function() {
  sidebar.classList.toggle("active")
}