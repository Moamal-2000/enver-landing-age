"use strict"

// Selectors
const header = document.querySelector('header')


// Variables
let isHeaderActive = false
let lastScrollYValue = 0





// Initialize code


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




// Events
window.addEventListener('scroll', (e) => handleHeaderOnScroll(e))


// slider 

const slider = document.querySelector(".slider")
const templatesHolder = document.querySelector(".templates")
const slideButtons = document.querySelectorAll(".switchers > *")
slideButtons.forEach(btn => {
  btn.onclick = function () {
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
})