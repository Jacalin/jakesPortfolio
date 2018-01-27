$(document).ready(function(){

  var port_height = $("#port-content").outerHeight();

  //console.log(port_height);
  $("#port-content .main-img img").css("height",((port_height/2)-20))
  $("#port-content .imgs img").css("height",((port_height/2) - 20))

  $.event.add(window, "resize", resizeFrame);

  function resizeFrame(){

    var port_height = $("#port-content").outerHeight();

    //console.log(port_height);
    $("#port-content .main-img img").css("height",(port_height/2)- 20)
    $("#port-content .imgs img").css("height",(port_height/2)-20)


  }

})
