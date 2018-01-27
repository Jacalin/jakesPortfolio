
$(document).ready(function(){


  $('.angle').addClass('angle2');


  $('nav.site-nav ul li a').click(function(e){
    e.preventDefault()
    var page = $(this).attr('href');
    $('body').load('https://jacalin.github.io/jakesPortfolio/'+ page + '.html');
    return false;
  });

  $('#content div.right a').click(function(){
    var page = $(this).attr('href');
    $('body').load('https://jacalin.github.io/jakesPortfolio/'+ page + '.html');
    return false;
  });
})
