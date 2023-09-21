"use strict"
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
