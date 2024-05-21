//   TOUCH SLIDER ?
const slider = document.querySelector(".section-bikes-container");
const slides = Array.from(bikes);
// const slides = Array.from(document.querySelectorAll(".bike-card"));
// const slideImageContainer = document.querySelector(())

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
// let currentIndex = 0; prova
let currentIndex = 0;

slides.forEach((slide, index) => {
  const slideImage = slide.firstElementChild.querySelector("img");

  // slideImage.addEventListener("dragstart", (e) => {
  //   e.preventDefault();
  //   // touch
  //   slide.addEventListener("touchstart", touchStart(index));
  //   slide.addEventListener("touchend", touchEnd);
  //   slide.addEventListener("touchmove", touchMove);

  //   //mouse
  //   slide.addEventListener("mousedown", touchStart(index));
  //   slide.addEventListener("mouseup", touchEnd);
  //   slide.addEventListener("mouseleave", touchEnd);
  //   slide.addEventListener("mousemove", touchMove);
  // });
  slideImage.addEventListener("dragstart", (e) => {
    e.preventDefault();
    // touch
    this.addEventListener("touchstart", touchStart(index));
    this.addEventListener("touchend", touchEnd);
    this.addEventListener("touchmove", touchMove);

    //mouse
    this.addEventListener("mousedown", touchStart(index));
    this.addEventListener("mouseup", touchEnd);
    this.addEventListener("mouseleave", touchEnd);
    this.addEventListener("mousemove", touchMove);
  });
});
//
// disabled context menu
sectionBikes.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  // return false;
};

function touchStart(index) {
  return function (event) {
    currentIndex = index;
    startPosition = getPositionX(event);
    console.log(startPosition);
    isDragging = true;
    animationID = requestAnimationFrame(animation);
    slider.classList.add("grabbing");
  };
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);
  const movedBy = currentTranslate - prevTranslate;

  if (movedBy <= -100 && currentIndex < slides.length - 1) {
    currentIndex += 1;
    counter = currentIndex;
  }
  if (movedBy > 100 && currentIndex > 0) {
    currentIndex -= 1;
    counter = currentIndex;
  }

  setPositionByIndex();

  slider.classList.remove("grabbing"); //should make it later
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPosition;
  }
}
function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
  // slider.style.transform = `translateX(${currentTranslate}px)`;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${currentTranslate}px)`;
  });
  // slider.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}
