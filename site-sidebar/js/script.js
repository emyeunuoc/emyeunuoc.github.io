$(document).ready(function(){
  $('.bxslider').bxSlider();
});
$('#displaySideBar').click(function(e){
	$('#wrapper').toggleClass('displaySideBar');
});
$(window).resize(function(e) {
    $('#wrapper').removeClass('displaySideBar');
});