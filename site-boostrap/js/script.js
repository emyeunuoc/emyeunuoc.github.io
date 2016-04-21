
$('.catelory-detail img').height($('.catelory-detail img').parent().width()+'px');
$('.catelory-detail a').width($('.catelory-detail img').height()-30+'px');
$('.catelory-detail a').css('line-height',$('.catelory-detail a').parent().width()*0.5+'px');
$('.catelory-detail a').css('bottom',$('.catelory-detail a').parent().width()*0.5*-1+'px');
$( window ).resize(function() {
	$('.catelory-detail img').height($('.catelory-detail img').parent().width()+'px');
	$('.catelory-detail a').css('line-height',$('.catelory-detail a').parent().width()*0.5+'px');
	$('.catelory-detail a').css('bottom',$('.catelory-detail a').parent().width()*0.5*-1+'px');
	$('.catelory-detail a').width($('.catelory-detail img').height()-30+'px');
});

$('.catelory-detail').hover(function(){
	$(this).children('a').css('bottom',0+'px');
},function(){
	$(this).children('a').css('bottom',$('.catelory-detail a').parent().width()*0.5*-1+'px');
});