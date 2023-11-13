const list = document.querySelector(".product-list");
let quantityEle = document.getElementById("quantity");
let quantity = quantityEle.value;
let cartAmount = document.getElementById("amount");
let renderCartAmount = (quantity) => {
  cartAmount.innerHTML = quantity;
};
const handleBuy = () => {
  let quantity = parseInt(quantityEle.value); // Retrieve the current value from the input field
  cartAmount.innerHTML = quantity;
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
