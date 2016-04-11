function play(){
	$('.card').attr('onclick','sliceCard(this)');
	frontCard = shuffle(frontCard);
	this.distributeCard();
}
function sliceCard(para){
	if($(para).children('.back').hasClass('back-slice') && $(para).children('.front').hasClass('front-slice')){
		console.log('ok');
	}else{
		$(para).children('.back').addClass('back-slice');
		$(para).children('.front').addClass('front-slice');
		console.log('no');
	}
}
var frontCard=['img/card1.jpg','img/card1.jpg','img/card2.jpg','img/card2.jpg','img/card3.jpg','img/card3.jpg','img/card4.jpg','img/card4.jpg','img/card5.jpg','img/card5.jpg','img/card6.jpg','img/card6.jpg','img/card7.jpg','img/card7.jpg','img/card8.jpg','img/card8.jpg','img/card9.jpg','img/card9.jpg','img/card10.jpg','img/card10.jpg','img/card11.jpg','img/card11.jpg','img/card12.jpg','img/card12.jpg'];
function shuffle(array){
	var currentIndex=array.length, temporaryValue, randomIndex;
	while(currentIndex !== 0){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -=1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
function distributeCard(){
	for(var i = 0;i < frontCard.length; i++){
		$($('.front>img')[i]).attr('src',frontCard[i]);
		console.log(frontCard[i]);
	}
}