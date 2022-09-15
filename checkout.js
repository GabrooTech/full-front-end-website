//navbar
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
// change img
function changeImage(event){
  document.querySelector(".mnimg").src = event.children[0].src
  var mp = new magpic('#idd-zoom', {
    magnifierSize:250,
    fadeDuration: 400,
    initialPosition: [250,300]
      }); 
}

var ProductsList = localStorage.getItem("products");
var products = JSON.parse(ProductsList);

if(products) {
  var prod_index = localStorage.getItem("currentProduct");
} else {
  var prod_index = -1;
}

let count = 0;
const counter = document.getElementById('counter');
document.getElementById('add-animation').addEventListener('click', event => {
  const cl = counter.classList
  const c = 'animated-counter'
  count ++;
  counter.innerText = parseInt(products[prod_index]['quantity']) + count;
  cl.remove(c, cl.contains(c));
  setTimeout(() =>
  counter.classList.add('animated-counter'), 1)
})
// Products Data List
function ProductItem() {
  var products = JSON.parse(localStorage.getItem("products"));
  var index = localStorage.getItem("currentProduct");
  console.log(index);
  var product = products[index];
  console.log(product);
  document.getElementById('main-image').src = product["main-image"];
  document.getElementById('altimg').src = product["main-image"];
  document.getElementById("second-alt-image").src = product["second-alt-image"];
  document.getElementById("third-alt-image").src = product["third-alt-image"];
  document.getElementById("fourth-alt-image").src = product["fourth-alt-image"];
  document.getElementById("fifth-alt-image").src = product["fifth-alt-image"];
  document.getElementById('DescriptionText').innerText = product["description"];
  document.getElementById('Manufactor').innerText = product["manufactor"];
  document.getElementById('YearOfCar').innerText = product["Year"];
  document.getElementById('Milage').innerText = product["Milage"];
  document.getElementById('Motor').innerText = product["Motor"];
  document.getElementById('gear').innerText = product["gear"];
  document.getElementById('Wheel').innerText = product["Wheel"];
  document.getElementById('Category').innerText = product["Category"]; 
}
ProductItem();
function AddToCart(){
  var ProductsList = localStorage.getItem("products");
  var products = JSON.parse(ProductsList);

  if(products) {
    var prod_index = localStorage.getItem("currentProduct");
    products[prod_index]['quantity']++;
  }
  localStorage.setItem("products", JSON.stringify(products));
}