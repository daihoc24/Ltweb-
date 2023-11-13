let list = document.querySelector(".carousel-inner");
let items = document.querySelectorAll(".carousel-item");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length - 1;
next.onclick = function () {
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSlider();
};
prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengthItems;
  } else {
    active = active - 1;
  }
  reloadSlider();
};
function reloadSlider() {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";
  clearInterval(refreshSlider);
  refreshSlider = setInterval(() => {
    next.click();
  }, 5000);
}
let refreshSlider = setInterval(() => {
  next.click();
}, 5000);

// cart
var shopping = document.querySelector(".shopping");
var close = document.querySelector(".off");
var body = document.querySelector("body");
var clear = document.querySelector(".clear");
var purchase = document.querySelector(".purchase");

shopping.addEventListener("click", () => {
  body.classList.add("active");
  document.getElementById("cover").style.display = "block";
});
close.addEventListener("click", () => {
  body.classList.remove("active");
  document.getElementById("cover").style.display = "none";
});
clear.addEventListener("click", () => {
  document.getElementById("listCart").style.display = "none";
  cartAmount.innerHTML=0;
  amountProduct.innerHTML=0;  
});
purchase.addEventListener("click", () => {
  alert("Thanh toán thành công!");
  body.classList.remove("active");
  document.getElementById("cover").style.display = "none";
  cartAmount.innerHTML=0;
  amountProduct.innerHTML=0;
});

// render Cart Amount
let cartAmount = document.getElementById("quantity");
let amountProduct = document.getElementById("amountProduct");
let priceProduct = document.getElementById("priceProduct");
let totalPrice = document.getElementById("totalPrice");

let renderCartTotalPrice = (quantity) => {
  totalPrice.innerHTML = quantity;
};

let renderCartAmount = (quantity) => {
  cartAmount.innerHTML = quantity;
};
let renderAmountCart = (quantity) => {
  amountProduct.innerHTML = quantity;
};
const handleBuy = () => {
  cartAmount.innerHTML++;
  amountProduct.innerHTML++;
  var price = parseFloat(priceProduct.innerHTML);
  var amount = parseFloat(cartAmount.innerHTML);
  var totalPrice = price * amount;
  renderCartTotalPrice(totalPrice+".000đ")
};
