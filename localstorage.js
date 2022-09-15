const productImage = localStorage.getItem("main-image");
const altpstorage = localStorage.getItem("main-alt-image")
const altscstorage = localStorage.getItem("second-alt-image")
const altthstorage = localStorage.getItem("third-alt-image")
const altforstorage = localStorage.getItem("fourth-alt-image")
const altfifstorage = localStorage.getItem("fifth-alt-image")
const productDescription = localStorage.getItem("desc-text")
const maunfactorStorage = localStorage.getItem("manufactor")
const yearstorage = localStorage.getItem("Year")
const milagestorage = localStorage.getItem("Milage")
const motorstorage = localStorage.getItem("Motor")
const gearstorage = localStorage.getItem("gear")
const wheelstorage = localStorage.getItem("Wheel")
const categorystorage = localStorage.getItem("Category")
const pricestorage = localStorage.getItem("Price")
const cutImageStorage = localStorage.getItem("cutImg")
const sepricestorage = localStorage.getItem("sePrice")
const nameStorage = localStorage.getItem("name")
const datafilterstorage = localStorage.getItem("data-filter")
const button = document.getElementById('clear')
const item = document.getElementById('output')
const altotp = document.getElementById('altotp')
const secalt = document.getElementById('secalt')
const thialt = document.getElementById('thialt')
const foralt = document.getElementById('foralt')
const fifalt = document.getElementById('fifalt')
const submitBtn = document.getElementById('submit')
const inpText = document.getElementById('descText')
const answer = document.getElementById('descriptionOutput')
const submitmanu = document.getElementById('submitmanu')
const manuText = document.getElementById('manufactorText')
const manufAnswer = document.getElementById('manufactoroutput')
const submitYear = document.getElementById('submityear')
const yearText = document.getElementById('yearText')
const yearAnswer = document.getElementById('yearoutput')
const submitMilage = document.getElementById('submitmilage')
const milageText = document.getElementById('milageText')
const milageAnswer = document.getElementById('Mileage')
const submitMotor = document.getElementById('submitmotor')
const motorText = document.getElementById('motorText')
const motorAnswer = document.getElementById('Motor')
const submitGear = document.getElementById('submitgear')
const gearText = document.getElementById('gearText')
const gearAnswer = document.getElementById('Gear')
const submitwheel = document.getElementById('submitwheel')
const wheelText = document.getElementById('wheelText')
const wheelAnswer = document.getElementById('Wheel')
const submitcategory = document.getElementById('submitcategory')
const categoryText = document.getElementById('categoryText')
const categoryAnswer = document.getElementById('Category')
const submitprice = document.getElementById('submitprice')
const priceText = document.getElementById('priceText')
const priceAnswer = document.getElementById('price')
const mainCut = document.getElementById('mainCut')
const submitseprice = document.getElementById('submitseprice')
const sepriceText = document.getElementById('sepriceText')
const sepriceAnswer = document.getElementById('seprice')
const nameBtn = document.getElementById('submitname')
const nameText = document.getElementById('nameText')
const nameanswer = document.getElementById('nameoutput')
const submitdatafilter = document.getElementById('submitdatafilter')
const datafilterText = document.getElementById('datafilterText')
const datafilterAnswer = document.getElementById('datafilter')
document.body.addEventListener("load", myInit, true);
 function myInit()
 {
manuDisplayCheck(), nameDisplayCheck(), yearDisplayCheck(),
milageDisplayCheck(), motorDisplayCheck(), gearDisplayCheck(),
wheelDisplayCheck(), categoryDisplayCheck(), priceDisplayCheck(),
sepriceDisplayCheck(), pnameDisplayCheck()
}; 
if(productImage) {
  document.getElementById("output").src = productImage;
}
if(altpstorage) {
  document.getElementById("altotp").src = altpstorage;
}
if(altscstorage) {
  document.getElementById("secalt").src = altscstorage
}
if(altthstorage) {
  document.getElementById("thialt").src = altthstorage;
}
if(altforstorage) {
  document.getElementById("foralt").src = altforstorage;
}
if(altfifstorage) {
  document.getElementById("fifalt").src = altfifstorage;
}
if(cutImageStorage) {
  document.getElementById("mainCut").src = cutImageStorage
}
var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    var file = event.target.files[0];
    const fileDataURL = file => new Promise((resolve,reject) => {
        let fr = new FileReader();
        fr.onload = () => resolve( fr.result);
        fr.onerror = reject;
        fr.readAsDataURL( file)
    });
    output.onload = function() {
        fileDataURL( file)
        .then(function(data) {
          document.getElementById("output").src = data;
          localStorage.setItem("main-image", data);
        })
        .catch(err => console.log(err));
    }
};
var loadFileSm = function(event) {
    var altotp = document.getElementById('altotp');
    altotp.src = URL.createObjectURL(event.target.files[0]);
    var file = event.target.files[0];
    const fileDataURL = file => new Promise((resolve,reject) => {
        let fr = new FileReader();
        fr.onload = () => resolve( fr.result);
        fr.onerror = reject;
        fr.readAsDataURL( file)
    });
    altotp.onload = function() {
        fileDataURL( file)
        .then(function(data) {
          document.getElementById("altotp").src = data;
          localStorage.setItem("main-alt-image", data);
        })
        .catch(err => console.log(err));
    }
};
var loadFileSa = function(event) {
  var secalt = document.getElementById('secalt');
  secalt.src = URL.createObjectURL(event.target.files[0]);
  var file = event.target.files[0];
  const fileDataURL = file => new Promise((resolve,reject) => {
      let fr = new FileReader();
      fr.onload = () => resolve( fr.result);
      fr.onerror = reject;
      fr.readAsDataURL( file)
  });
  secalt.onload = function() {
      fileDataURL( file)
      .then(function(data) {
        document.getElementById("secalt").src = data;
        localStorage.setItem("second-alt-image", data);
      })
      .catch(err => console.log(err));
  }
};
var loadFileta = function(event) {
  var thialt = document.getElementById('thialt');
  thialt.src = URL.createObjectURL(event.target.files[0]);
  var file = event.target.files[0];
  const fileDataURL = file => new Promise((resolve,reject) => {
      let fr = new FileReader();
      fr.onload = () => resolve( fr.result);
      fr.onerror = reject;
      fr.readAsDataURL( file)
  });
  thialt.onload = function() {
      fileDataURL( file)
      .then(function(data) {
        document.getElementById("thialt").src = data;
        localStorage.setItem("third-alt-image", data);
      })
      .catch(err => console.log(err));
  }
};
var loadFilefora = function(event) {
  var foralt = document.getElementById('foralt');
  foralt.src = URL.createObjectURL(event.target.files[0]);
  var file = event.target.files[0];
  const fileDataURL = file => new Promise((resolve,reject) => {
      let fr = new FileReader();
      fr.onload = () => resolve( fr.result);
      fr.onerror = reject;
      fr.readAsDataURL( file)
  });
  foralt.onload = function() {
      fileDataURL( file)
      .then(function(data) {
        document.getElementById("foralt").src = data;
        localStorage.setItem("fourth-alt-image", data);
      })
      .catch(err => console.log(err));
  }
};
var loadFilefira = function(event) {
  var fifalt = document.getElementById('fifalt');
  fifalt.src = URL.createObjectURL(event.target.files[0]);
  var file = event.target.files[0];
  const fileDataURL = file => new Promise((resolve,reject) => {
      let fr = new FileReader();
      fr.onload = () => resolve( fr.result);
      fr.onerror = reject;
      fr.readAsDataURL( file)
  });
  fifalt.onload = function() {
      fileDataURL( file)
      .then(function(data) {
        document.getElementById("fifalt").src = data;
        localStorage.setItem("fifth-alt-image", data);
      })
      .catch(err => console.log(err));
  }
};
function nameDisplayCheck() {
  if(localStorage.getItem("description")) {
    let description = localStorage.getItem("description")
    answer.textContent = `${description}`
  }else{
    answer.textContent = `You will see description here`
  }
}
function manuDisplayCheck() {
  if(localStorage.getItem("manufactor")) {
    let manufactor = localStorage.getItem("manufactor")
    manufAnswer.textContent = `${manufactor}`
  }else{
    manufAnswer.textContent = `You will see manufactor name here`
  }
}
function yearDisplayCheck() {
  if(localStorage.getItem("Year")) {
    let Year = localStorage.getItem("Year")
    yearAnswer.textContent = `${Year}`
  }else{
    yearAnswer.textContent = `You will see Year here`
  }
}
function milageDisplayCheck() {
  if(localStorage.getItem("Milage")) {
    let Milage = localStorage.getItem("Milage")
    milageAnswer.textContent = `${Milage}`
  }else{
    milageAnswer.textContent = `You will see Milage here`
  }
}
function motorDisplayCheck() {
  if(localStorage.getItem("Motor")) {
    let Motor = localStorage.getItem("Motor")
    motorAnswer.textContent = `${Motor}`
  }else{
    motorAnswer.textContent = `You will see Motor size here`
  }
}
function gearDisplayCheck() {
  if(localStorage.getItem("gear")) {
    let gear = localStorage.getItem("gear")
    gearAnswer.textContent = `${gear}`
  }else{
    gearAnswer.textContent = `You will see gear type here`
  }
}
function wheelDisplayCheck() {
  if(localStorage.getItem("Wheel")) {
    let Wheel = localStorage.getItem("Wheel")
    wheelAnswer.textContent = `${Wheel}`
  }else{
    wheelAnswer.textContent = `You will see Wheel type here`
  }
}
submitcategory.addEventListener("click", function() {
  localStorage.setItem("Category", categoryText.value)
  categoryDisplayCheck()
  localStorage.setItem("Wheel", wheelText.value)
  wheelDisplayCheck()
  localStorage.setItem("gear", gearText.value)
  gearDisplayCheck()
  localStorage.setItem("Motor", motorText.value)
  motorDisplayCheck()
  localStorage.setItem("Milage", milageText.value)
  milageDisplayCheck()
  localStorage.setItem("Year", yearText.value)
  yearDisplayCheck()
  localStorage.setItem("manufactor", manuText.value)
  manuDisplayCheck()
  localStorage.setItem("description", inpText.value)
  nameDisplayCheck()
  localStorage.setItem("Price", priceText.value)
  priceDisplayCheck()
})
function categoryDisplayCheck() {
  if(localStorage.getItem("Category")) {
    let Category = localStorage.getItem("Category")
    categoryAnswer.textContent = `${Category}`
  }else{
    categoryAnswer.textContent = `You will see category here`
  }
}
function priceDisplayCheck() {
  if(localStorage.getItem("Price")) {
    let Price = localStorage.getItem("Price")
    priceAnswer.textContent = `${Price}$`
  }else{
    priceAnswer.textContent = `You will see price here`
  }
}
submitseprice.addEventListener("click", function() {
  localStorage.setItem("sePrice", sepriceText.value)
  sepriceDisplayCheck()
})
function sepriceDisplayCheck() {
  if(localStorage.getItem("sePrice")) {
    let sePrice = localStorage.getItem("sePrice")
    sepriceAnswer.textContent = `price : ${sePrice}$`
  }else{
    sepriceAnswer.textContent = `U will see car price here`
  }
}
nameBtn.addEventListener("click", function() {
  localStorage.setItem("name", inpText.value)
  nameDisplayCheck()
})
nameBtn.addEventListener("click", function() {
  localStorage.setItem("name", nameText.value)
  pnameDisplayCheck()
})
function pnameDisplayCheck() {
  if(localStorage.getItem("name")) {
    let name = localStorage.getItem("name")
    nameanswer.textContent = `${name}`
  }else{
    nameanswer.textContent = ` `
  }
}
submitdatafilter.addEventListener("click", function() {
  var dataFilterInput = document.getElementById("datafilterText");
  var dataFilterValue = dataFilterInput.options[dataFilterInput.selectedIndex].text;
  localStorage.setItem("data-filter", dataFilterValue);
});
function dataFilterLoad() {
  var dataFilterInput = document.getElementById("datafilterText");
  var dataFilterValue = localStorage.getItem("data-filter");
  if(dataFilterValue) {
    dataFilterInput.value = dataFilterValue;
  }
}
dataFilterLoad();
function remove(){
  item.remove()
  localStorage.removeItem("main-image");
  alert("main image has been removed")
}
function removealtmn(){
  altotp.remove()
  localStorage.removeItem("main-alt-image");
  alert("first alt image has been removed")
}
function removealtsi(){
  secalt.remove()
  localStorage.removeItem("second-alt-image");
  alert("second alt image has been removed")
}
function removealtti(){
  thialt.remove()
  localStorage.removeItem("third-alt-image");
  alert("third alt image has been removed")
}
function removealtfori(){
  foralt.remove()
  localStorage.removeItem("fourth-alt-image");
  alert("fourth alt image has been removed")
}
function removealtfifi(){
  fifalt.remove()
  localStorage.removeItem("fifth-alt-image")
  alert("fifth alt image has been removed")
}
function removedesc(){
  answer.remove()
  localStorage.removeItem("description")
  alert("description has been removed")
}
function removemanu(){
  manufAnswer.remove()
  localStorage.removeItem("manufactor")
  alert("manufactor has been removed")
}
function removeyear(){
  yearAnswer.remove()
  localStorage.removeItem("Year")
  alert("Year has been removed")
}
function removemilage(){
  milageAnswer.remove()
  localStorage.removeItem("Milage")
  alert("Milage has been removed")
}
function removemotor(){
  motorAnswer.remove()
  localStorage.removeItem("Motor")
  alert("Motor size has been removed")
}
function removegear(){
  gearAnswer.remove()
  localStorage.removeItem("gear")
  alert("Gear type has been removed")
}
function removewheel(){
  wheelAnswer.remove()
  localStorage.removeItem("Wheel")
  alert("Wheel type has been removed")
}
function removecategory(){
  categoryAnswer.remove()
  localStorage.removeItem("Category")
  alert("category has been removed")
}
function removeprice(){
  priceAnswer.remove()
  localStorage.removeItem("Price")
  alert("Price has been removed")
}
function removeoffimg(){
  mainCut.remove()
  localStorage.removeItem("cutImg");
  alert("Offpage image has been removed")
}
function removeseprice(){
  sepriceAnswer.remove()
  localStorage.removeItem("sePrice")
  alert("sePrice has been removed")
}
function removename(){
  nameanswer.remove()
  localStorage.removeItem("name")
  alert("name has been removed")
}
function removedatafilter(){
  datafilterAnswer.remove()
  localStorage.removeItem("data-filter")
  alert("data-filter has been removed")
}
function changeImage(event){
  document.querySelector(".mnimg").src = event.children[0].src
}
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
function getDominantColor(imageObject, ctx) {
  ctx.drawImage(imageObject, 0, 0, 1, 1);
  const i = ctx.getImageData(0, 0, 1, 1).data;
  return "#" + ((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).slice(1);
}
function dominantColor() {
  const canvas = document.getElementById("canvas"),
        preview = document.getElementById("preview"),
        ctx = canvas.getContext("2d");

  canvas.width = 1
  canvas.height = 1
  preview.width = 400
  preview.height = 400
  const input = document.getElementById("CarImageFile");
  input.type = "file"
  input.accept = "image/*"
  input.onchange = event => {
    const file = event.target.files[0]
    const reader = new FileReader()
    const fileDataURL = file => new Promise((resolve,reject) => {
      let fr = new FileReader();
      fr.onload = () => resolve( fr.result);
      fr.onerror = reject;
      fr.readAsDataURL( file)
  });
    reader.onload = readerEvent => {
      const image = new Image()
      image.onload = function() {
        fileDataURL( file)
        .then(function(data) {
          document.getElementById("mainCut").src = data;
          localStorage.setItem("cutImg", data);
        })
        .catch(err => console.log(err));
        var dominantColorNow = getDominantColor(image, ctx);
        localStorage.setItem("cutColor", dominantColorNow);
        var styleText = `
          #CarBox:before {
            background-color: `+dominantColorNow+`
          }
        `;
        var styleElement = document.createElement("style");
        styleElement.innerText = styleText;
        document.head.appendChild(styleElement);
      }
      image.src = readerEvent.target.result;
    }
    reader.readAsDataURL(file, "UTF-8");
  }
  if(localStorage.getItem("cutImg")) {
    document.getElementById("mainCut").src = localStorage.getItem("cutImg");
  }
  if(localStorage.getItem("cutColor")) {
    var dominantColorNow = localStorage.getItem("cutColor");
    var styleText = `
      #CarBox:before {
        background-color: `+dominantColorNow+`
      }
    `;
    var styleElement = document.createElement("style");
    styleElement.innerText = styleText;
    document.head.appendChild(styleElement);
  }
}
dominantColor();
function submitData() {
  // Products List
  var ProductsList = localStorage.getItem("products");
  var products = JSON.parse(ProductsList);
  var product_json = {
    "fourth-alt-image": localStorage.getItem("fourth-alt-image"),
    "cutColor": localStorage.getItem("cutColor"),
    "Milage": localStorage.getItem("Milage"),
    "Price": localStorage.getItem("Price"),
    "Category": localStorage.getItem("Category"),
    "description": localStorage.getItem("description"),
    "gear": localStorage.getItem("gear"),
    "Motor": localStorage.getItem("Motor"),
    "name": localStorage.getItem("name"),
    "Year": localStorage.getItem("Year"),
    "second-alt-image": localStorage.getItem("second-alt-image"),
    "main-alt-image": localStorage.getItem("main-alt-image"),
    "Wheel": localStorage.getItem("Wheel"),
    "third-alt-image": localStorage.getItem("third-alt-image"),
    "main-image": localStorage.getItem("main-image"),
    "fifth-alt-image": localStorage.getItem("fifth-alt-image"),
    "manufactor": localStorage.getItem("manufactor"),
    "data-filter": localStorage.getItem("data-filter"),
    "sePrice": localStorage.getItem("sePrice"),
    "cutImg": localStorage.getItem("cutImg"),
    "quantity": "0"
  };
  var product_list = [];
  if(!products) {
    product_list[0] = product_json;
  } else {
    for(var index in products) {
      product_list[index] = products[index];
    }
    product_list[++index] = product_json;
  }
  localStorage.removeItem("fourth-alt-image");
  localStorage.removeItem("cutColor");
  localStorage.removeItem("Milage");
  localStorage.removeItem("Price");
  localStorage.removeItem("Category");
  localStorage.removeItem("description");
  localStorage.removeItem("gear");
  localStorage.removeItem("Motor");
  localStorage.removeItem("name");
  localStorage.removeItem("Year");
  localStorage.removeItem("second-alt-image");
  localStorage.removeItem("main-alt-image");
  localStorage.removeItem("Wheel");
  localStorage.removeItem("third-alt-image");
  localStorage.removeItem("main-image");
  localStorage.removeItem("fifth-alt-image");
  localStorage.removeItem("manufactor");
  localStorage.removeItem("data-filter");
  localStorage.removeItem("sePrice");
  localStorage.removeItem("cutImg");
  localStorage.setItem("products", JSON.stringify(product_list));
  window.location.href = "mainpage.html";
}

function generateData() {
  // Products List
  var ProductsList = localStorage.getItem("products");
  var products = JSON.parse(ProductsList);
  
  var product_list = [];
  if(!products) {
    product_list[0] = {
      "fourth-alt-image": "img/mazda-alt-3.png",
      "cutColor": "#6a778b",
      "Milage": "1000 KM",
      "Price": "28,045$",
      "Category": "SUV",
      "description": "Mazda carbon ther car is in best condition from Salon it's will be better if you will see it's with your own eyes so waiting for you",
      "gear": "Manual",
      "Motor": "3.0",
      "name": "Carbon",
      "Year": "2021",
      "second-alt-image": "img/mazda-alt-1.png",
      "main-alt-image": "img/mazda-solidd.png",
      "Wheel": "Left",
      "third-alt-image": "img/mazda-alt-2.png",
      "main-image": "img/mazda-solidd.png",
      "fifth-alt-image": "img/mazda-alt-4.png",
      "manufactor": "Mazda",
      "data-filter": "MAZDA",
      "sePrice": "28,045",
      "cutImg": "img/mazda.png",
      "quantity": "0"
    };
    product_list[1] = {
      "fourth-alt-image": "img/mercdez-alt-3.png",
      "cutColor": "#cececc",
      "Milage": "1000 KM",
      "Price": "110,850$",
      "Category": "Mazda",
      "description": "Mercedes-benz S-class, white sedan in best condition from salon, you can test drive it on place price is negotiable",
      "gear": "Manual",
      "Motor": "3.0",
      "name": "S-Class",
      "Year": "2021",
      "second-alt-image": "img/mercdez-alt-1.png",
      "main-alt-image": "img/mercdez-solidd.png",
      "Wheel": "Left",
      "third-alt-image": "img/mercdez-alt-2.png",
      "main-image": "img/mercdez-solidd.png",
      "fifth-alt-image": "img/mercdez-alt-4.png",
      "manufactor": "Merzcedez",
      "data-filter": "MERCEDES",
      "sePrice": "110,850",
      "cutImg": "img/mercdez.png",
      "quantity": "0"
    };
    product_list[2] = {
      "fourth-alt-image": "img/nissan-alt-3.png",
      "cutColor": "#bd9e8a",
      "Milage": "1000 KM",
      "Price": "47,125$",
      "Category": "SUV",
      "description": "Nissan-ariya one of the best SUV style car with full comfort. In best condition full kitted. For test drive contact us in support",
      "gear": "Manual",
      "Motor": "4.0",
      "name": "Ariya",
      "Year": "2021",
      "second-alt-image": "img/nissan-alt-1.png",
      "main-alt-image": "img/nissan-solidd.png",
      "Wheel": "Left",
      "third-alt-image": "img/nissan-alt-2.png",
      "main-image": "img/nissan-solidd.png",
      "fifth-alt-image": "img/nissan-alt-4.png",
      "manufactor": "Nissan",
      "data-filter": "NISSAN",
      "sePrice": "47,125",
      "cutImg": "img/nissan.png",
      "quantity": "0"
    };
    product_list[3] = {
      "fourth-alt-image": "img/tesla-alt-3.png",
      "cutColor": "#970415",
      "Milage": "1000 KM",
      "Price": "41,000$",
      "Category": "Electronic",
      "description": "Tesla 2021 Model 3 edition. Viloet color from salon in best condition full comfort and best choice in Electric side.",
      "gear": "Manual",
      "Motor": "1.5",
      "name": "2021 model 3",
      "Year": "2021",
      "second-alt-image": "img/tesla-alt-1.png",
      "main-alt-image": "img/tesla.solidd.png",
      "Wheel": "Left",
      "third-alt-image": "img/tesla-alt-2.png",
      "main-image": "img/tesla.solidd.png",
      "fifth-alt-image": "img/tesla-alt-4.png",
      "manufactor": "Tesla",
      "data-filter": "TESLA",
      "sePrice": "41,000",
      "cutImg": "img/tesla.png",
      "quantity": "0"
    };
  }
  localStorage.setItem("products", JSON.stringify(product_list));
  //window.location.href = "mainpage.html";
}

generateData();

document.getElementById("aeb").addEventListener("click", function(evt) {
  submitData();
});