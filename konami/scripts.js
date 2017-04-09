$(document).ready(function(){$('#pc, #battlestation, #dog').fadeToggle(600);$('#wrapper').click(function(event){event.stopPropagation()
$('#pc, #battlestation, #dog').fadeToggle(600);if(Math.random()*10>6)
$('body').css('background-image',"url('./battlestation.jpg')");else
$('body').css('background-image',"url('./battledog.jpg')");});});img1=new Image();img1.src="./battlestation.jpg";