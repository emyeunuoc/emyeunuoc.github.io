function fix(){
	var x=window.innerHeight;
	console.log(x);
	document.getElementById('wrap').style.marginTop=0.08*x+'px';
	changeTheme();
}
var q1={
	ques:'Chấm chấm mút mút, đút vào lỗ trôn Hai sợi lông ***, cái dài cái ngắn”',
	a1:'Chuyện ấy',
	a2:'Đánh răng',
	a3:'Xâu kim',
	a4:'Khó vãi',
	dapan:'a3'
};
var q2={
	ques:'Thân em vừa trắng lại vừa mềm.Vừa bàn tay úp.Anh mà miết lên miết xuống là nó tiết nhớt ra',
	a1:'Cái ấy',
	a2:'Thuốc đánh răng',
	a3:'Làm gì có cái gì',
	a4:'Xà phòng',
	dapan:'a4'
};
var q3={
	ques:' Trên lông dưới lông, phồng lên để ngắm',
	a1:'Bắp ngô',
	a2:'Con mắt',
	a3:'Cái ấy ấy',
	a4:'Hihi đồ ngốc',
	dapan:'a2'
};

var q4={
	ques:' Anh dắt em ra sau hè.Vừa đẩy vừa đè nước chảy re re',
	a1:'Lại ấy rồi',
	a2:'Móc cua',
	a3:'Mài dao',
	a4:'Cho con bú',
	dapan:'a3'
};

var q5={
	ques:' Từ gì mà 100% nguời dân Việt Nam đều phát âm sai',
	a1:'Hu hu hu',
	a2:'rắn rỏi lên',
	a3:'sai',
	a4:'Bó tay',
	dapan:'a3'
};
var qa=[q1,q2,q3,q4,q5];
var count=0;
var state='start';
function writeA(){
		$($('#cauhoi')).html(qa[count].ques);
		$($('.an')[0]).html(qa[count].a1);
		$($('.an')[1]).html(qa[count].a2);
		$('.an')[2].innerHTML=qa[count].a3;
		$('.an')[3].innerHTML=qa[count].a4;
		$('#go').html('Hãy chọn 1 câu trả lời đi nào..');
		state='start';
	
}
function submitA(para){
	if($(para).attr('id')==qa[count].dapan && state=='start'){
		$($('.true')[para.id.charAt(1)-1]).show();	
		count++;
		state='next';
		$('#go').html('Chính xác! chiến tiếp nào...');
		if(count==qa.length){ 
			$('#go').html('Chúc mừng,bạn đã chiến thắng!Click để nhận quà nào');
			state='win';
		}
	}else if(state=='start'){
		$($('.false')[para.id.charAt(1)-1]).show();
		count=0;
		state='replay';
		$('#go').html('Sai rồi!Lại từ đầu nhé!');
	}
}
function control(){
	switch(state){
		case 'next':
			writeA();
			$('.true').hide();
			break;
		case 'replay':
			writeA();
			$('.false').hide();
			this.showFrame();
			break;
		case 'win':
			window.location.href='congratulation.html';
			break;
	}
}
function play(){
	this.hideFrame();
	writeA();
}
function hideFrame(){
	$('#frame').hide();
	$('#play-btn').hide();
}
function showFrame(){
	$('#frame').show();
	$('#play-btn').show();
}
/**********************THEME*******************/
var theme0={
	background_img:'url(img/bg.jpg)',
	cauhoi_color:'#111110',
	an_color:'#D51F1F',
	an_hover_color:'#ffffff',
	go_color:'#43609C',
	go_hover_color:'#ffffff'
}
var theme1={
	background_img:'url(img/bg2.jpg)',
	cauhoi_color:'#5F5F5F',
	an_color:'#43609C',
	an_hover_color:'#ffffff',
	go_color:'#D51F1F',
	go_hover_color:'#ffffff'
}
var theme2={
	background_img:'url(img/bg3.jpg)',
	cauhoi_color:'#919191',
	an_color:'#289497',
	an_hover_color:'#ffffff',
	go_color:'#FED101',
	go_hover_color:'#ffffff'
}
var theme=[theme0,theme1,theme2];
themID=1;
function changeTheme(){
	themID++;
	if(themID==theme.length)themID=0;
	$('body').css('background-image',theme[themID].background_img);
	$('#cauhoi').css('background-color',theme[themID].cauhoi_color);
	$('.an').css('background-color',theme[themID].an_color);
	$('.an').hover(function(e) {
 		$(this).css('background-color',theme[themID].an_hover_color);
		$(this).css('color',theme[themID].an_color);
		},function(e){
		$(this).css('background-color',theme[themID].an_color);
		$(this).css('color',theme[themID].an_hover_color);
		$(this).css('transition','all 0.2s ease-in-out');});
	$('#go').css('background-color',theme[themID].go_color);
	$('#go').hover(function(e) {
 		$(this).css('background-color',theme[themID].go_hover_color);
		$(this).css('color',theme[themID].go_color);
		},function(e){
		$(this).css('background-color',theme[themID].go_color);
		$(this).css('color',theme[themID].go_hover_color);
		$(this).css('transition','all 0.2s ease-in-out');});
}
