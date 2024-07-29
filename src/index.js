window.onscroll = function () {
    myFunction();
  };
  var ul = document.querySelector("#main-navbar-ul"); 
  var navbar = document.querySelector("#main-navbar");
  var sticky = navbar.offsetTop;
    
  function myFunction() {
    if (window.scrollY >= sticky) {
      navbar.classList.add("fixed-main");
      navbar.classList.remove("custom-slide-out");
      ul.classList.add("justify-center");
    } else {
      navbar.classList.remove("fixed-main");
      navbar.classList.add("custom-slide-out");
      navbar.classList.remove("justify-center");
    }
  }