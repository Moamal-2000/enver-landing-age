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
const allClickElements = [...footerLiElements, ...allAnchorTags, ...allButtons, ...slideButtons]






// Functions
function handleHeaderOnScroll(e) {
  const scrollY = e.currentTarget.scrollY

  // If user scrolling up active header and show it
  if (lastScrollYValue > scrollY) {
    header.classList.add('active')
    header.classList.remove('hide')
    isHeaderActive = true
  } else {
    header.classList.remove('active')
    header.classList.add('hide')
    isHeaderActive = false
  }

  // Update last value of scrollY
  lastScrollYValue = scrollY

  // Active header depending on position of scrollY
  scrollY > 4 ? header.classList.add('active') : header.classList.remove('active')
}


function handleSlidesButtons(btn) {
  let ratio = Math.ceil(templatesHolder.offsetWidth / templatesHolder.children.length)
  if (btn.classList.contains("left")) {
    slider.scrollBy({
      top:0,
      left:-ratio,
      behavior:"smooth",
    });
  }
  else {
    slider.scrollBy({
      top:0,
      left:ratio,
      behavior:"smooth",
    })
  }
}


function handleCursorMoveEffect(e) {
  const positionX = e.clientX;
  const positionY = e.clientY;
  const halfWidthCursor = cursorEffectEle.offsetWidth / 2;
  const halfHeightCursor = cursorEffectEle.offsetHeight / 2;

  cursorEffectEle.style.cssText = `
  transform: translate(${positionX - halfWidthCursor}px, ${positionY - halfHeightCursor}px)
  `
}


function handleCursorActive(e, ele) {
  const positionX = e.offsetX,
  positionY = e.offsetY,
  halfWidthLiEle = e.currentTarget.offsetWidth / 2,
  halfHeightLiEle = e.currentTarget.offsetHeight / 2;

ele.style.cssText = `
transform: translate(${positionX - halfWidthLiEle}px, ${positionY - halfHeightLiEle}px);
`
}





// Events
window.addEventListener('scroll', (e) => handleHeaderOnScroll(e))


slideButtons.forEach(btn => btn.addEventListener("click", () => handleSlidesButtons(btn)))


window.addEventListener("mousemove", (e) => handleCursorMoveEffect(e))


allClickElements.forEach(element => {
  element.addEventListener("mouseenter", () => {
    cursorEffectEle.classList.add("active")
  })

  element.addEventListener("mouseout", () => {
    cursorEffectEle.classList.remove("active")
  })
})


liElements.forEach(li => {
  const anchorTag = li.querySelector("a")

  li.addEventListener("mousemove", (e) => handleCursorActive(e, anchorTag))

  li.addEventListener("mouseout", () => {
    anchorTag.style.cssText = ""
    })
})







