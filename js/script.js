$(document).ready(function(){
  
  var color = '#000';
  var row1 = '<div class="row1"></div>';
  var NEXT = '<div class="NEXT"></div>';
  var buttons = '<div class=buttons> <button id=reset>Reset</button> <button id=colorizer>Colorize it!</button>';
  var grid = 16;
  for(j=0; j < grid; j++){
     for(i=0; i < grid; i++){
        $('.board').append(row1);
      };
      $('.board').append(NEXT);
    
  };
  $('.board').append(buttons);
  $('.row1').mouseenter(
    function() {
    $(this).css("background-color", color);
  });
  $('#reset').click(function(){
    $('.row1').css("background-color", "white");
    color = '#000';
  });
  $('#colorizer').click(function(){
    color = '#'+ Math.random().toString(16).substr(2, 3);
    
  });
  
});