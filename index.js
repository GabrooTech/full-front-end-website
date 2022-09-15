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
// count up
let valueDisplays = document.querySelectorAll(".num");
let interval = 1;
function counter(){
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-value"));
    let duration = Math.floor(interval / endValue);
    let counter  = setInterval(function () {
      startValue += 5;
      valueDisplay.textContent = startValue;
      if (startValue == endValue){
        clearInterval(counter);
      }
    }, duration);
  })
}
counter();
// searchbar
const search = () =>{
  const searchbox = document.getElementById("search-input").value.toLocaleUpperCase();
  const storeitem = document.getElementById("product-list");
  const product = document.querySelectorAll(".card")
  const pname = storeitem.getElementsByTagName("h1")
  for(var i=0; i < pname.length; i++){
    let match = product[i].getElementsByTagName('h1')[0]
    if(match){
      let textvalue = match.textContent || match.innerHTML
      if(textvalue.toLocaleUpperCase().indexOf(searchbox) > -1){
        product[i].style.display = "";
      }else{
        product[i].style.display = "none";
      }
    }
  }
}
// filter
const liItem = document.querySelectorAll('aside ul li')
const imgItem = document.querySelectorAll('.card')
liItem.forEach(li => {
  li.onclick = function(){
    const value = li.querySelector('.Links_name').textContent;
    imgItem.forEach(card => {
      card.style.display = 'none';
      //console.log(card.getAttribute('data-filter')+' == '+value.toUpperCase());
      if(card.getAttribute('data-filter') == value.toUpperCase() || value.toUpperCase() == "ALL"){
        card.style.display = 'block';
      }
    })
  }
})
// Products Data List
function ProductList() {
  var products = JSON.parse(localStorage.getItem("products"));
  var html = '';
  for(var index in products) {
    var product = products[index];
    if(product["name"] != null) {
      html += `
        <div id="box-`+index+`" class="card first-color box-`+index+` clickItem" data-index="`+index+`" data-filter="`+product["data-filter"]+`">
          <div class="img-box">
              <img src="`+product["cutImg"]+`" alt="image can't load" draggable="false" class="product-img">
          </div>
          <div class="content-box">
              <h1>`+product["name"]+`</h1>
              <h2>price: `+product["sePrice"]+`$</h2>
              <div class="car-colors">
                  <h2>Colors:</h2>
                  <span class="color-1"></span>
                  <span class="color-2"></span>
                  <span class="color-3"></span>
              </div>
              <a class="cursor">Check out</a>
          </div>
      </div>
      <style>.box-`+index+`:before { background-color: `+product["cutColor"]+` }</style>
      `;
    }
  }
  document.getElementById("ProductList").innerHTML = html+'<a href="addproduct.html" class="add-product-link"><div class="add-product"><h1>Add product</h1></div></a>';
  for(var index in products) {
    var product = products[index];
    if(product["name"] != null) {
      document.getElementById('box-'+index).addEventListener("click", function() {
        localStorage.setItem("currentProduct", this.getAttribute('data-index'));
        window.location.href = "checkout.html";
      });
    }
  }
}

ProductList();
