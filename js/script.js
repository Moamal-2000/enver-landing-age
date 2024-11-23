"use strict"

// Selectors
const header = document.querySelector('header')
const slider = document.querySelector(".slider")
const templatesHolder = document.querySelector(".templates")
const slideButtons = document.querySelectorAll(".switchers > i")
const liElements = document.querySelectorAll("footer nav ul li")
const cursorEffectEle = document.querySelector(".cursor-effect")
const footerLiElements = document.querySelectorAll("footer nav li")
const allAnchorTags = document.querySelectorAll("a")
const allButtons = document.querySelectorAll("button")






// Variables
let isHeaderActive = false
let lastScrollYValue = 0
let isMouseEnterNavLinks = true
const allClickableElements = [...footerLiElements, ...allAnchorTags, ...allButtons, ...slideButtons]






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
  const halfWidthCursor = cursorEffectEle.offsetWidth / 2;
  const halfHeightCursor = cursorEffectEle.offsetHeight / 2;

  cursorEffectEle.style.cssText = `
  transform: translate(${positionX - halfWidthCursor}px, ${positionY - halfHeightCursor}px)
  `
}


function handleCursorActive(event, ele) {
  const positionX = event.offsetX;
  const positionY = event.offsetY;
  const halfWidthLiEle = event.currentTarget.offsetWidth / 2;
  const halfHeightLiEle = event.currentTarget.offsetHeight / 2;

  ele.style.cssText = `
  transform: translate(${positionX - halfWidthLiEle}px, ${positionY - halfHeightLiEle}px);
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

liElements.forEach(li => {
  const anchorTag = li.querySelector("a")

  li.addEventListener("mousemove", (event) => handleCursorActive(event, anchorTag))

  li.addEventListener("mouseout", () => {
    anchorTag.style.cssText = ""
  })
})
