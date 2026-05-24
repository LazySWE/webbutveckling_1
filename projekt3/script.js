function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
}
function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
}


function slowScrollTo(target, duration) {
  const element = document.querySelector(target);
  const start = window.pageYOffset;
  const end = element.offsetTop;
  const distance = end - start;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    const progress = Math.min(timeElapsed / duration, 1);
    window.scrollTo(0, start + distance * progress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Lightmode
function myFunction() {
  //slide2 top wave
  var lightmode = document.querySelector(".wave");
  lightmode.classList.toggle("lightmode-wave"); 

  // Slide2 backround
  var lightmode = document.querySelector(".slide2");
  lightmode.classList.toggle("lightmode-slide2");

  // Slide3 backround
  var lightmode = document.querySelector(".slide3");
  lightmode.classList.toggle("lightmode-slide3");

  // slide3 bottom wave
  var lightmode = document.querySelector(".wave2");
  lightmode.classList.toggle("lightmode-wave2");

  // slide2 left_box
  var lightmode = document.querySelector(".left-box");
  lightmode.classList.toggle("lightmode-left_box");

  // slide2 right_box
  var lightmode = document.querySelector(".right-box");
  lightmode.classList.toggle("lightmode-right_box");

  // slide3 left_box2
  var lightmode = document.querySelector(".left-box2");
  lightmode.classList.toggle("lightmode-left_box2");
  
  // slide3 right_box2
  var lightmode = document.querySelector(".right-box2");
  lightmode.classList.toggle("lightmode-right_box2");

  // footer
  var lightmode = document.querySelector("footer");
  lightmode.classList.toggle("lightmode-footer");

  // navbar
  var lightmode = document.querySelector(".real-bar");
  lightmode.classList.toggle("lightmode-real-bar");
  
  // navbar img
  const logo = document.querySelector(".logo img");


  // kolla om lightmode är aktivt
  const isLightmode = document.querySelector(".real-bar").classList.contains("lightmode-real-bar");

  // hambörjar meny till lightmode
  const hamburger = document.querySelector(".hamburger-icon");



  if (isLightmode) {
    logo.src = "white-logo.svg";
    hamburger.src = "hamburger-menu-lightmode.png";
  } else {
    logo.src = "logo.svg";
    hamburger.src = "hamburger-menu-darkmode.png";
  }
  

}