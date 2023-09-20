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
  } else {
    header.classList.remove('active')
    header.classList.add('hide')
  }

  // Update last value of scrollY
  lastScrollYValue = scrollY

  // Active header depending on position of scrollY
  scrollY > 4 ? header.classList.add('active') : header.classList.remove('active')
}




// Events
window.addEventListener('scroll', (e) => handleHeaderOnScroll(e))
