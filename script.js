let name = "Software Developer";
let anim = document.querySelector('#vertical');
let hr=document.querySelector('hr');
let hrWidth = true;
let i=0;
  setInterval(() => {
      anim.innerHTML += name.charAt(i);
      if (hrWidth) {
        hr.style.height = "15px";
      }
      else {
        hr.style.height = "70px";
      }
      hrWidth=!hrWidth;
    i++
    
},300)