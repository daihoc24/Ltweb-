const list = document.querySelector(".product-list");
let quantityEle = document.getElementById("quantity");
let quantity = quantityEle.value;
let cartAmount = document.getElementById("amount");
let renderCartAmount = (quantity) => {
  cartAmount.innerHTML = quantity;
};
const handleBuy = () => {
  let quantity = parseInt(quantityEle.value);
  let amount = parseInt(cartAmount.innerHTML);
  cartAmount.innerHTML = amount + quantity;
  renderCartAmount(cartAmount.innerHTML);
};
let render = (amount) => {
  quantityEle.value = amount;
};
const handleMinus = () => {
  if (quantity !== 1) quantity--;
  render(quantity);
};
const handlePlus = () => {
  quantity++;
  render(quantity);
};
// let items = document.querySelectorAll(".product-item");
let isDragging = false,
  startX,
  startScrollLeft;
const dragStart = (e) => {
  isDragging = true;
  // Thêm lớp dragging để disabled text
  list.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = list.scrollLeft;
};
const dragging = (e) => {
  if (!isDragging) return;
  list.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  list.classList.remove("dragging");
};
list.addEventListener("mousedown", dragStart);

list.addEventListener("mousemove", dragging);

document.addEventListener("mouseup", dragStop);

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
  cartAmount.innerHTML = 0;
  amountProduct.innerHTML = 0;
});
purchase.addEventListener("click", () => {
  alert("Thanh toán thành công!");
  body.classList.remove("active");
  document.getElementById("cover").style.display = "none";
  cartAmount.innerHTML = 0;
  amountProduct.innerHTML = 0;
});
