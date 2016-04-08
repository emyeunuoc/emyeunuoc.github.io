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
var imgtrue=document.getElementsByClassName('true');
var imgfalse=document.getElementsByClassName('false');
var imgplay=document.getElementById('play-btn');
var frame=document.getElementById('frame');
var letgo=document.getElementById('go');
var state='begin';
var doc_q=document.getElementsByTagName('p')[0];
var doc_a1=document.getElementsByTagName('p')[1];
var doc_a2=document.getElementsByTagName('p')[2];
var doc_a3=document.getElementsByTagName('p')[3];
var doc_a4=document.getElementsByTagName('p')[4];
function writeQ(q){
	if(count<qa.length){
		doc_q.innerText='Câu '+(count+1)+' : '+q.ques;
		doc_a1.innerText=q.a1;
		doc_a2.innerText=q.a2;
		doc_a3.innerText=q.a3;
		doc_a4.innerText=q.a4;
		letgo.innerText='Suy nghĩ cho kĩ nào';
		state='start';
		this.disableImg();
	}else{
		alert('win');
	}
}
function disablePlaybtn(){
	frame.style.display='none';
	imgplay.style.display='none';
}
function enablePlaybtn(){
	frame.style.display='block';
	imgplay.style.display='block';
}
function disableImg(){
	for(var i=0;i<imgtrue.length;i++){
		imgtrue[i].style.display='none';
		imgfalse[i].style.display='none';
	}
}
function play(){
	if(state=='begin'){
		disablePlaybtn();
	}
	if(state=='replay'){
		this.enablePlaybtn();
		state='begin';
		return;
	}
	writeQ(qa[count]);
}

function submitA(para){
	var rs=para.id;
	//tra loi dung
	if(rs==qa[count].dapan && state=='start'){
		imgtrue[Number(rs.charAt(1))-1].style.display='block';
		console.log(rs);
		letgo.innerText='Đúng rồi!Chiến tiếp nào...';
		state='next';
		count++;
		if(count==qa.length){
			state='win';
			letgo.innerText='Chúc mừng!Bạn thắng rồi,click vào đây để nhận thưởng nào';
		}
	}else if(state=='start'){
		imgfalse[Number(rs.charAt(1))-1].style.display='block';
		letgo.innerText='Sai rồi!Lại từ đầu nha...';
		state='replay';
		count=0;
	}
}
function control(){
	switch(state){
		case 'start':
			letgo.innerText='Hãy chọn 1 câu trả lời đi nào!';
			break;
		case 'next':
			play();
			break;
		case 'replay':
			play();
			break;
		case 'win':
			window.location.href ='congratulation.html'; 
			break;
	}
}
function fix(){
	var x=window.innerHeight;
	console.log(x);
	document.getElementById('wrap').style.marginTop=0.08*x+'px';
}