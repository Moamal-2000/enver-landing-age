"use strict"

// Selectors
const header = document.querySelector('header')
const slider = document.querySelector(".slider")
const templatesHolder = document.querySelector(".templates")
const slideButtons = document.querySelectorAll(".switchers > button > i")
const liElements = document.querySelectorAll("footer nav ul li")
const cursorEffectEle = document.querySelector(".cursor-effect")
const footerLiElements = document.querySelectorAll("footer nav li")
const allAnchorTags = document.querySelectorAll("a")
const allButtons = document.querySelectorAll("button")
const allClickableElements = document.querySelectorAll(":where(a, button, li)")






// Variables
let isHeaderActive = false
let lastScrollYValue = 0





// Functions
function handleHeaderOnScroll(event) {
  const scrollY = event.currentTarget.scrollY

  // If user scrolling up active header and show it
  if (lastScrollYValue > scrollY) {
    header.classList.add('active');
    header.classList.remove('hide');
    isHeaderActive = true;
  } else {
    header.classList.remove('active');
    header.classList.add('hide');
    isHeaderActive = false;
  }

  lastScrollYValue = scrollY;
  header.classList[scrollY > 4 ? "add" : "remove"]("active");
}


function handleSlidesButtons(btn) {
  let ratio = Math.ceil(templatesHolder.offsetWidth / templatesHolder.children.length)
  const isLeftButton = btn.classList.contains("left")

  slider.scrollBy({
    left: isLeftButton ? -ratio : ratio,
    behavior:"smooth",
  });
}


function handleCursorMoveEffect(event) {
  const positionX = event.clientX;
  const positionY = event.clientY;

  cursorEffectEle.style.cssText = `
  transform: translate(${positionX}px, ${positionY}px)
  `
}





// Events
window.addEventListener('scroll', (event) => handleHeaderOnScroll(event))
window.addEventListener("mousemove", (event) => handleCursorMoveEffect(event))

slideButtons.forEach(btn => btn.addEventListener("click", () => handleSlidesButtons(btn)))

allClickableElements.forEach(element => {
  element.addEventListener("mouseenter", () => {
    cursorEffectEle.classList.add("active")
  })

  element.addEventListener("mouseout", () => {
    cursorEffectEle.classList.remove("active")
  })
})