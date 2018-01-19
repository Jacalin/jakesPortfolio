import 'jquery';
import './mobile-nav';
import './page-switch';
import './typer';
import '../scss/main.scss';

$(function(){

  $("#home-btn").click(function(){

    $(".angle").toggleClass("angle2");

  })
})
