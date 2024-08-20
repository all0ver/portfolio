window.onscroll = function () {
    myFunction();
  };
  let ul = document.querySelector("#main-navbar-ul"); 
  let navbar = document.querySelector("#main-navbar");
  let about = navbar.offsetTop;
  let hamburger = document.querySelector("#hamburger-menu");
    
  function myFunction() {
    if (window.scrollY >= about) {
      navbar.classList.add("fixed-main");
      navbar.classList.remove("custom-slide-out");
    } else {
      navbar.classList.remove("fixed-main");
      navbar.classList.add("custom-slide-out");
    }
  }

// hamburger menu

let button = document.querySelector("#hamburger-button");
button.addEventListener("click", function() {
  ul.classList.toggle('max-[700px]:hidden');
  hamburger.classList.toggle('custom-hamburger-animation');
});


let a = document.querySelectorAll(".main-navbar-a");

a.forEach(element => {
  element.addEventListener("click", function() {
    ul.classList.add('max-[700px]:hidden');
  })
});