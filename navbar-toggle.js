let prevScrollpos = window.scrollY;
window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  let navbars = document.getElementsByClassName("navbar");
  for (let i = 0; i < navbars.length; i++) {
    if (prevScrollpos > currentScrollPos) {
      navbars[i].style.top = "0";
    } else {
      navbars[i].style.top = "-50px";
    }
  }
  prevScrollpos = currentScrollPos;
}


console.log("Hello world")