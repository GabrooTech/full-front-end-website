var secondtarget = document.getElementById("cart-container")
var target = document.getElementById("cart-section")
var checker = document.getElementById("override")
var closer = document.getElementById("end-button")
var exiter = document.getElementById("exit")
var mastercard = document.getElementById("Master-card")
var mastercardicon = document.getElementById("Master-card-i")
var visacard = document.getElementById("Visa-card")
var visacardicon = document.getElementById("Visa-card-i")
var trash = document.getElementsByClassName('fa-trash')
var increaseButton = document.getElementsByClassName('fa-plus')
var decreaseButton = document.getElementsByClassName('fa-minus')
var quantity = document.getElementsByClassName('cart-product-amount')
if(document.querySelector('.cart-product-amount')) {
    var quantityContent = document.querySelector('.cart-product-amount').textContent;
} else {
    var quantityContent = 0;
}
// delete items
for(var i = 0; i < trash.length; i++){
    var deleteItem = trash[i]
    deleteItem.addEventListener('click', function(event){
        var buttonclicked = event.target
        buttonclicked.parentElement.parentElement.parentElement.remove()
        console.log("deleted")
    })
}
// quantity
for(var i = 0; i < increaseButton.length; i++){
    var allincreaseButton = increaseButton[i]
    allincreaseButton.addEventListener('click', function(event){
        var incbuttonclicked = event.target
        var input = incbuttonclicked.parentElement.parentElement.children[1]
        var inputValue = input.textContent
        var newValue = parseInt(inputValue) + 1
        input.textContent = newValue
        console.log(newValue)
    })
}
for(var i = 0; i < decreaseButton.length; i++){
    var alldecreaseButton = decreaseButton[i]
    alldecreaseButton.addEventListener('click', function(event){
        var decbuttonclicked = event.target
        var input = decbuttonclicked.parentElement.parentElement.children[1]
        var inputValue = input.textContent
        var newValue = parseInt(inputValue) - 1
        if(newValue >= 1) {
            input.textContent = newValue
        }else{
            alert("QUANTITY CAN'T BE LESS THAN 1")
        }
    })
}
// credit card page
if(document.getElementById("cho")){
document.getElementById("cho").addEventListener("click", function() {
        var newElement = document.createElement("div")
        newElement.innerHTML = `                        <div class="override" id="override">
        <div class="check-out-box">
            <div class="exit" id="exit">X</div>
            <div class="card-info">
                <h1>Please select payment Type</h1>
                <div class="payment-card">
                    <div class="Master-card" id="Master-card" onclick="changeColor()">
                        <i class="fa-brands fa-cc-mastercard" id="Master-card-i"></i>
                    </div>
                    <div class="Visa-card" id="Visa-card" onclick="changeVisaColor()">
                        <i class="fa-brands fa-cc-visa" id="Visa-card-i"></i>
                    </div>
                </div>
            </div>
            <div class="Card-number">
                <div>
                    <h3>CARD NUMBER</h3>
                </div>
                <h3>CVC</h3>
                <input type="text" placeholder="7419 9412 5919 9218" class="credit-card-numbers">
                <input type="text" placeholder="255" class="credit-card-cvc">
            </div>
            <div class="owner-name">
                <h3>CARD HOLDER NAME</h3>
                <input type="text" placeholder="Your Name">
            </div>
            <h3>EXPERITION DATE</h3>
            <div class="experition-date">
                <div class="day">
                    <input type="number" placeholder="20" class="day-input">
                </div>
                <div class="month">
                    <select name="role" class="month-input">
                        <option disabled selected value="Select an car type">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="Octomber">Octomber</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                </div>
                <div class="year-of-checkout">
                    <input type="number" placeholder="2022" class="year-input">
                </div>
            </div>
            <div class="end-button">
                <button id="end-button" onclick="close(this)">COMPLETE ORDER (TOTAL $`+document.getElementById("TotalCost").innerHTML.replace('$', '')+`)</button>
            </div>
        </div>
    </div>`

    target.appendChild(newElement)
    var closer = document.getElementById("end-button")
    var exiter = document.getElementById("exit")
    if(closer){
        document.getElementById("end-button").addEventListener("click", function() {
            close()
        })
    }
    if(exiter){
        document.getElementById("exit").addEventListener("click", function() {
            exit()
        })
    }
    })
    function getStyle(x, styleProp) {
        if (x.currentStyle)
          var y = x.currentStyle[styleProp];
        else if (window.getComputedStyle)
          var y = document.defaultView.getComputedStyle(x, null).getPropertyValue(styleProp);
        return y;
    }
    function changeColor(){
        var checker = document.getElementById("override")
        var mastercard = document.getElementById("Master-card")
        var mastercardicon = document.getElementById("Master-card-i")
        var visacard = document.getElementById("Visa-card")
        var visacardicon = document.getElementById("Visa-card-i")
        if(checker){
            var mastercardanswer = getStyle(mastercard, 'background-color')
        }
        visacard.style.background = "white"
        visacardicon.style.color = "#1A1F71"
        if(getStyle(mastercard, 'background-color') == mastercardanswer){
            mastercard.style.background = "black"
            mastercardicon.style.color = "white"
        }else if(mastercard.style.background == "black"){
            mastercard.style.background = "white"
            mastercardicon.style.color = "#FF5F00"
        }
    }
    function changeVisaColor(){
    var mastercard = document.getElementById("Master-card")
    var mastercardicon = document.getElementById("Master-card-i")
    var visacard = document.getElementById("Visa-card")
    var visacardicon = document.getElementById("Visa-card-i")
    var visacardanswer = getStyle(visacard, 'background-color')
    mastercard.style.background = "white"
    mastercardicon.style.color = "#FF5F00"
    if(getStyle(visacard, 'background-color') == visacardanswer){
        visacard.style.background = "black"
        visacardicon.style.color = "white"
    }else if(visacard.style.background == "black"){
        visacard.style.background = "white"
        visacardicon.style.color = "#1A1F71"
    }
    }
    function exit(){
        var checker = document.getElementById("override")
        checker.remove()
    }
    function close(){
        secondtarget.remove()
        target.innerHTML = `<h1 class="after-text">Payment is done thanks for buying!</h1>`
    }
}
// cart
function LoadCart() {
  var products = JSON.parse(localStorage.getItem("products"));
  var html = '';
  var TotalCost = 0;
  for(var index in products) {
    var product = products[index];
    if(product["name"] != null && product['quantity'] > 0) {
      html += `
         <div class="cart-card" data-index="`+index+`">
            <img src="`+product["cutImg"]+`" class="cart-product-img">
            <span class="cart-product-name">`+product["name"]+`</span>
            <div class="cart-product-price">`+product["sePrice"].replace(',', '')+`$</div>
            <div class="quantity-editor">
                <div class="minus">
                    <i class="fa-solid fa-minus"></i>
                </div>
                <span class="cart-product-amount">`+product["quantity"]+`</span>
                <div class="plus">
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>
            <div>
                <div class="delete-item" id="deleteItem">
                    <i class="fa-solid fa-trash"></i>
                </div>
                <div class="cart-product-total">`+(product["sePrice"].replace(',', '') * product['quantity'])+`$</div>
            </div>
        </div>
      `;
      TotalCost += (product["sePrice"].replace(',', '') * product['quantity']);
    }
  }
  document.getElementById("CartItems").innerHTML = html;

  document.getElementById("TotalCost").innerHTML = TotalCost+'$';


  setTimeout(function() {
    var quantity = document.getElementsByClassName('cart-product-amount')
if(document.querySelector('.cart-product-amount')) {
    var quantityContent = document.querySelector('.cart-product-amount').textContent;
} else {
    var quantityContent = 0;
}
// delete items
for(var i = 0; i < trash.length; i++){
    var deleteItem = trash[i]
    deleteItem.addEventListener('click', function(event){
        var buttonclicked = event.target

        var ProductsList = localStorage.getItem("products");
            var products = JSON.parse(ProductsList);

            if(products) {
                var prod_index = this.closest('.cart-card').getAttribute('data-index');
                products[prod_index]['quantity'] = 0;
            }
            localStorage.setItem("products", JSON.stringify(products));
            
            LoadCart();


        buttonclicked.parentElement.parentElement.parentElement.remove()
        console.log("deleted")
    })
}
// quantity
for(var i = 0; i < increaseButton.length; i++){
    var allincreaseButton = increaseButton[i]
    allincreaseButton.addEventListener('click', function(event){
        var incbuttonclicked = event.target
        var input = incbuttonclicked.parentElement.parentElement.children[1]
        var inputValue = input.textContent
        var newValue = parseInt(inputValue) + 1
        input.textContent = newValue
        console.log(newValue)

        var ProductsList = localStorage.getItem("products");
        var products = JSON.parse(ProductsList);

        if(products) {
            var prod_index = this.closest('.cart-card').getAttribute('data-index');
            products[prod_index]['quantity']++;
        }
        localStorage.setItem("products", JSON.stringify(products));

        LoadCart();
    })
}
for(var i = 0; i < decreaseButton.length; i++){
    var alldecreaseButton = decreaseButton[i]
    alldecreaseButton.addEventListener('click', function(event){
        var decbuttonclicked = event.target
        var input = decbuttonclicked.parentElement.parentElement.children[1]
        var inputValue = input.textContent
        var newValue = parseInt(inputValue) - 1
        if(newValue >= 1) {
            input.textContent = newValue
            
            var ProductsList = localStorage.getItem("products");
            var products = JSON.parse(ProductsList);

            if(products) {
                var prod_index = this.closest('.cart-card').getAttribute('data-index');
                products[prod_index]['quantity']--;
            }
            localStorage.setItem("products", JSON.stringify(products));
            
            LoadCart();
        }else{
            alert("QUANTITY CAN'T BE LESS THAN 1")
        }
    })
}


  }, 500);

}
LoadCart();
// ნერვები დამაწყდა