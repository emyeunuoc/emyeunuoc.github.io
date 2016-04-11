var current=null;
function play(){
	$('.card').attr('onclick','sliceCard(this)');
	frontCard = shuffle(frontCard);
	this.distributeCard();
}
function sliceCard(card){
	$(card).children().toggleClass('flip');
	if(!current){
		current=$(card);
		$(card).css('pointer-events', 'none');
		$('#bg-music').attr('src','sound/dog.mp3');
		document.getElementById('bg-music').play();
	}else{
		if(current.attr('data-name') != $(card).attr('data-name')){
			setTimeout(function(){
				$(current).children().toggleClass('flip');
				$(card).children().toggleClass('flip');
				current.css('pointer-events', 'auto');
				$(card).css('pointer-events', 'auto');
				$('#bg-music').attr('src','sound/puin_low.mp3');
				document.getElementById('bg-music').play();
				current=null;
			},500);
		}else{
			setTimeout(function(){
				$('#bg-music').attr('src','sound/puin_high.mp3');
				document.getElementById('bg-music').play();
				current.children().css('opacity',0);
				$(card).children().css('opacity',0);
				current=null;
			},500);		
		}
	}
}
var frontCard=['card1','card2','card3','card4','card5','card6','card7','card8','card9','card10','card11','card12'];
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
	frontCard= frontCard.concat(frontCard);
	for(var i = 0;i < frontCard.length; i++){
		$($('.front>img')[i]).attr('src','img/'+frontCard[i]+'.jpg');
		$($('.card')[i]).attr('data-name',frontCard[i]);
	}
}