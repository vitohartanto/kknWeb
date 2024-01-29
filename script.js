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

let clicked = false;
let xAxis;
let x;

wrapperSlider.addEventListener("mouseup", () => {
  wrapperSlider.style.cursor = `grab`;
});
wrapperSlider.addEventListener("mousedown", (e) => {
  clicked = true;
  xAxis = e.offsetX - slider.offsetLeft;
  // current position

  wrapperSlider.style.cursor = `grabbing`;
});

window.addEventListener("mouseup", () => {
  clicked = false;
});

wrapperSlider.addEventListener("mousemove", (e) => {
  if (!clicked) return;
  e.preventDefault();

  x = e.offsetX;
  slider.style.left = `${x - xAxis}px`;
  // not scrolling forever

  checkSize();
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

// MAP KKN

let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();
