
const hamburger = document.getElementById("hamburger")
const navlist = document.getElementById("nav-list")

hamburger.addEventListener("click",()=>{
    navlist.classList.toggle("nav_list-active")
})



var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });