$('nav > ul > li').hover(function(){
	$(this).children('ul').stop().slideDown(200);
},function(){
	$(this).children('ul').stop().slideUp(200);	
});
var sliderimg=['img/slide1.jpg','img/slide2.jpg','img/slide3.jpg'];
var count=0;
for(var i=0;i<sliderimg.length;i++){
	$('#slider').append('<img class="sliderImg" src="'+sliderimg[i]+'"/>');
}
var sliderPlay1=function(sliderCount){
	$($('.sliderImg')[sliderCount]).css('transition','all 0s linear');
	$($('.sliderImg')[sliderCount]).css('transform','translate(800px,0)');
};
var sliderPlay2=function(sliderCount){
	$($('.sliderImg')[sliderCount]).css('transition','all 1s linear');
	$($('.sliderImg')[sliderCount]).css('transform','translate(000px,0)');
};
var sliderPlay3=function(sliderCount){
	$($('.sliderImg')[sliderCount]).css('transition','all 1s linear');
	$($('.sliderImg')[sliderCount]).css('transform','translate(-800px,0)');
};	
for(var i=1;i<sliderimg.length;i++){
	sliderPlay1(i);
}
function sliderOk(){
	setTimeout(function(){sliderPlay3(count)},000);
	setTimeout(function(){
		if(count!=sliderimg.length-1) sliderPlay2(count+1);
		else sliderPlay2(0);
	},000);
	setTimeout(function(){
		sliderPlay1(count);
		count++;
		if(count==sliderimg.length){
			 count=0;
			sliderPlay2(count);
		}
	},2000);
}
var play = setInterval(function(){
	sliderOk();
},4000);
function next(para){
	$(para).removeAttr("onclick");
	clearInterval(play);
	sliderPlay2(count+1);
	sliderPlay3(count);
	if(count < sliderimg.length-1) sliderPlay2(count+1);
	else sliderPlay2(0);
	setTimeout(function(){
		sliderPlay1(count);	
		count++;
		if(count==sliderimg.length){
			count=0;
		}
		$(para).attr('onclick','next(this)');
		play = setInterval(function(){sliderOk();},4000);
	},1000);
}