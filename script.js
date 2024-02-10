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

let hamburger = document.querySelector("#hamburger");
let close = document.querySelector("#close");

hamburger.addEventListener("click", () => {
  const logo = document.querySelector(".logo"); 
  const listctn1 = document.querySelector(".listctn1");
  const close = document.querySelector("#close"); 

  hamburger.style.display = "none";
  listctn1.style.display = "flex";
  listctn1.style.justifyContent = "center"; 
  close.style.display = "block";
});


close.addEventListener("click", () => {
  let logo = document.querySelector(".logo");
  let listctn1 = document.querySelector(".listctn1");

  hamburger.style.display = "block"; 
  listctn1.style.display = "none";
  close.style.display = "none";
});

let listctn1 = document.querySelector(".listctn1");
listctn1.addEventListener("click",()=>{
  listctn1.style.display = "none";
  hamburger.style.display= "block";
  close.style.display="none";
})