let line = document.querySelector(".box .sliderLine .line");
let sliderLine = document.querySelector(".box .sliderLine");
let box = document.querySelector(".box");
let headTitle =document.querySelector(".headTitle");

line.addEventListener("mousedown",function(){
  line.style.zIndex = 1000;
  line.style.position = "absolute";

});

sliderLine.addEventListener("mousemove",onMouseMove);

function moveAt(pageX) {
    line.style.left = pageX -line.offsetWidth + 'px';
     headTitle.innerHTML=`${line.style.left}`;
  };


  function onMouseMove(e) {
    moveAt(e.pageX);
  };



