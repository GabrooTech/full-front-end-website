let marker = document.querySelector('#marker')
let list = document.querySelectorAll('ul li')
function moveIndicator(e){
  marker.style.left = e.offsetLeft+'px';
  marker.style.width = e.offsetWidth+'px';
}
list.forEach(link => {
  link.addEventListener('mousemove', (e) => {
    moveIndicator(e.target);
  })
})
function activeLink(){
  list.forEach((item) =>
  item.classList.remove('active'))
  this.classList.add('active');
}
list.forEach((item) => 
item.addEventListener('mouseover', activeLink));
let count = 0;
const counter = document.getElementById('counter');
document.getElementById('add-animation').addEventListener('click', event => {
  const cl = counter.classList
  const c = 'animated-counter'
  count ++;
  counter.innerText = count;
  cl.remove(c, cl.contains(c));
  setTimeout(() =>
  counter.classList.add('animated-counter'), 1)
})