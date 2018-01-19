
$(document).ready(function(){


  $('.angle').addClass('angle2');


  $('nav.site-nav ul li a').click(function(){
    var page = $(this).attr('href');
    $('body').load('/'+ page + '.html');
    return false;
  });
})
