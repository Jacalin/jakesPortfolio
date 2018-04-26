import 'jquery';
import './mobile-nav';
import './page-switch';
import './height_calc';
import '../scss/main.scss';

import '../img/img-1.png';
import '../img/img-2.png';
import '../img/img-3.png';


$(document).ready(function(){
  const currentText = document.querySelector('.active');
  const currentImg = document.querySelector("#current-img");
  const currentHref = document.querySelector('#current-href');

  //console.log(currentText);

  const imgs = document.querySelectorAll('.imgs img');
  const txts = document.querySelectorAll(".main-img-txt .project");

  imgs.forEach(img => img.addEventListener('click',imgClick))

  function imgClick(e){
    currentImg.src = e.target.src;
    currentHref.href = e.target.alt;
    currentImg.className = e.target.className;
    console.log(currentImg.className);
    txts.forEach(txt => {
      if(currentImg.className === txt.id){
        $(txts).removeClass('active');
        $(txt).addClass('active');
      }
    })
  }
})
