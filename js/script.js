"use strict"
const slider = document.querySelector(".slider")
const templatesHolder = document.querySelector(".templates")
const slideButtons = document.querySelectorAll(".switchers > *")
slideButtons.forEach(btn => {
  btn.onclick = function () {
    let ratio = templatesHolder.offsetWidth / templatesHolder.children.length
    slideButtons.forEach(btn => btn.classList.remove("active"));
    btn.classList.add("active");
    if (btn.classList.contains("left")) {
      slider.scrollBy(ratio,0);
    }
    else {
      slider.scrollBy(-ratio,0);
    }
  }
})
