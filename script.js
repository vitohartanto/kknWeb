//FOR NAVIGATION HAMBURGER BUTTON
const toggleButton = document.getElementById("toggle-button");
const navList = document.getElementsByClassName("nav-list");

toggleButton.addEventListener("click", () => {
  for (const element of navList) {
    element.classList.toggle("active");
  }
});

//FOR SLIDER
const wrapperSlider = document.querySelector(".wrapper-slider");
const slider = document.querySelector(".slider");

const wrapperSlider2 = document.querySelector(".wrapper-slider2");
const slider2 = document.querySelector(".slider2");

let clicked = false,
  clicked2 = false;
let xAxis, xAxis2;
let x, x2;

wrapperSlider.addEventListener("mouseup", () => {
  wrapperSlider.style.cursor = `grab`;
});

wrapperSlider2.addEventListener("mouseup", () => {
  wrapperSlider2.style.cursor = `grab`;
});

wrapperSlider.addEventListener("mousedown", (e) => {
  clicked = true;
  xAxis = e.offsetX - slider.offsetLeft;
  // current position

  wrapperSlider.style.cursor = `grabbing`;
});

wrapperSlider2.addEventListener("mousedown", (e) => {
  clicked2 = true;
  xAxis2 = e.offsetX - slider2.offsetLeft;
  // current position

  wrapperSlider2.style.cursor = `grabbing`;
});

window.addEventListener("mouseup", () => {
  clicked = false;
});

window.addEventListener("mouseup", () => {
  clicked2 = false;
});

wrapperSlider.addEventListener("mousemove", (e) => {
  if (!clicked) return;
  e.preventDefault();

  x = e.offsetX;
  slider.style.left = `${x - xAxis}px`;
  // not scrolling forever

  checkSize();
});

wrapperSlider2.addEventListener("mousemove", (e) => {
  if (!clicked2) return;
  e.preventDefault();

  x2 = e.offsetX;
  slider2.style.left = `${x2 - xAxis2}px`;
  // not scrolling forever

  checkSize2();
});

function checkSize() {
  let wrapperSliderOut = wrapperSlider.getBoundingClientRect();
  let sliderIn = slider.getBoundingClientRect();

  if (parseInt(slider.style.left) > 0) {
    slider.style.left = `0px`;
  } else if (sliderIn.right < wrapperSliderOut.right) {
    slider.style.left = `-${sliderIn.width - wrapperSliderOut.width}px`;
  }
}

function checkSize2() {
  let wrapperSliderOut2 = wrapperSlider2.getBoundingClientRect();
  let sliderIn2 = slider2.getBoundingClientRect();

  if (parseInt(slider2.style.left) > 0) {
    slider2.style.left = `0px`;
  } else if (sliderIn2.right < wrapperSliderOut2.right) {
    slider2.style.left = `-${sliderIn2.width - wrapperSliderOut2.width}px`;
  }
}
