const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener('click', function(){
  if (header.classList.contains('open')){
    body.classList.remove('noscroll');
    header.classList.remove('open');
    for (elem of fadeElems) {
      elem.classList.remove('fade-in');
      elem.classList.add('fade-out');
    }
  }else {
    body.classList.add('noscroll');
    header.classList.add('open');
    for (elem of fadeElems) {
      elem.classList.remove('fade-out');
      elem.classList.add('fade-in');
    }
  }
}); 