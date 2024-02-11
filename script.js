let name = "Software Developer";
let anim = document.querySelector('#vertical');
let hr = document.querySelector('hr');
let hrWidth = true;
let i = 0;

let intervalID = setInterval(() => {
    anim.innerHTML += name.charAt(i);
    if (hrWidth) {
      hr.style.height = "15px";
    } else {
      hr.style.height = "70px";
    }
    hrWidth = !hrWidth;
    i++;

    // Check if the entire text has been printed
    if (i >= name.length) {
        // Stop the interval
        clearInterval(intervalID);
        hr.style.display = "none";
    }
}, 300);


const hamburger = document.querySelector("#hamburger");
const closeIcon = document.querySelector("#close");
const listctn1 = document.querySelector(".listctn1");

let mediaQuery = window.matchMedia("(max-width: 600px)");
function toggleMenu(displayHamburger) {
  
  if (mediaQuery.matches) {
    hamburger.style.display = displayHamburger ? "block" : "none";
    closeIcon.style.display = displayHamburger ? "none" : "block";
    listctn1.style.display = displayHamburger ? "none" : "flex";
    listctn1.style.justifyContent = "center"; 
  }
  else{
    // hamburger.style.display = "none";
    // closeIcon.style.display= "none"
    // listctn1.style.display = "flex";
  }
}

hamburger.addEventListener("click", () => toggleMenu(false));
closeIcon.addEventListener("click", () => toggleMenu(true));

document.querySelector(".listctn1").addEventListener("click", () => {
  
  let hamburger = document.querySelector("#hamburger"); 
  let close = document.querySelector("#close"); 
  let x = window.matchMedia("(max-width: 600px)");
  if (x.matches) {
      document.querySelector(".listctn1").style.display = "none";
      
      if (hamburger && close) { 
          hamburger.style.display = "block";
          close.style.display = "none";
      }
  }
});
x.addEventListener('change', e => {
  if (e.matches) {
    listctn1.style.display = "none";
    hamburger.style.display= "block";
    close.style.display="none";
  } else {
    listctn1.style.display = "flex";
    hamburger.style.display= "none";
        close.style.display="none";
  }
});
