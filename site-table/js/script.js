var p1={
	img:'img/img1.jpg',
	name:'Adidas Ultra Boost',
	code:'ubxq1082',
	price:3800,
	quan:10
};
var p2={
	img:'img/img2.jpg',
	name:'Adidas NMD',
	code:'nmdq1882',
	price:2900,
	quan:20
};
var p3={
	img:'img/img3.jpg',
	name:'Adidas tubular',
	code:'ntbdq1082',
	price:3500,
	quan:50
};
var p4={
	img:'img/img4.jpg',
	name:'Nike max air 2016',
	code:'nikeq1082',
	price:4500,
	quan:10
};
var p5={
	img:'img/img5.jpg',
	name:'Nike jordan',
	code:'nikesa544',
	price:8500,
	quan:15
};
var p6={
	img:'img/img6.jpg',
	name:'Nike huarache',
	code:'nikehu4512',
	price:3400,
	quan:20
};
var allProduct=[p3,p4,p5,p1,p2,p6];

function sortTable(para,str){
	console.log($(para).attr('class'));
	if($(para).hasClass('fa-caret-square-o-down')){
		$('i').removeClass('fa-sort-alpha-asc');
		$('i').removeClass('fa-sort-alpha-desc');
		$('i').removeClass('fa-caret-square-o-down');
		$('i').addClass('fa-caret-square-o-down');
		$(para).toggleClass('fa-caret-square-o-down');
		$(para).addClass('fa-sort-alpha-asc');
	}
	if($(para).hasClass('fa-sort-alpha-desc')){
		$(para).toggleClass('fa-sort-alpha-asc');
		$(para).toggleClass('fa-sort-alpha-desc');
		switch(str){
			case 'name':allProduct.sort(compareName);break;
			case 'code':allProduct.sort(compareCode);break;
			case 'price':allProduct.sort(comparePrice);break;
			case 'quan':allProduct.sort(compareQuan);break;
		}
		display();
	}else{
		$(para).toggleClass('fa-sort-alpha-asc');
		$(para).toggleClass('fa-sort-alpha-desc');
		switch(str){
			case 'name':allProduct.sort(compareNameDesc);break;
			case 'code':allProduct.sort(compareCodeDesc);break;
			case 'price':allProduct.sort(comparePriceDesc);break;
			case 'quan':allProduct.sort(compareQuanDesc);break;
		}
		display();
	}
}
function display(){
	var count = allProduct.length;
	$('.table-tr').remove();
	for(var i = 0 ; i < count ; i++){
		$('#table-ds').append('<tr class="table-tr">'+
            	'<td><img src="'+allProduct[i].img+'"></td>'+
                '<td>'+allProduct[i].name+'</td>'+
                '<td>'+allProduct[i].code+'</td>'+
                '<td>'+allProduct[i].price+'k</td>'+
                '<td>'+allProduct[i].quan+'</td>'+
            '</tr>');
	}
}
function compareName(a,b) {
  if (a.name < b.name)
    return -1;
  else if (a.name > b.name)
    return 1;
  else 
    return 0;
}
function compareNameDesc(a,b) {
  if (a.name < b.name)
    return 1;
  else if (a.name > b.name)
    return -1;
  else 
    return 0;
}
function compareCode(a,b) {
  if (a.code < b.code)
    return -1;
  else if (a.code > b.code)
    return 1;
  else 
    return 0;
}
function compareCodeDesc(a,b) {
  if (a.code < b.code)
    return 1;
  else if (a.code > b.code)
    return -1;
  else 
    return 0;
}
function comparePrice(a,b) {
  if (a.price < b.price)
    return -1;
  else if (a.price > b.price)
    return 1;
  else 
    return 0;
}
function comparePriceDesc(a,b) {
  if (a.price < b.price)
    return 1;
  else if (a.price > b.price)
    return -1;
  else 
    return 0;
}
function compareQuan(a,b) {
  if (a.quan < b.quan)
    return -1;
  else if (a.quan > b.quan)
    return 1;
  else 
    return 0;
}
function compareQuanDesc(a,b) {
  if (a.quan < b.quan)
    return 1;
  else if (a.quan > b.quan)
    return -1;
  else 
    return 0;
}