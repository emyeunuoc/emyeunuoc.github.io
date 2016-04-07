var screen = document.getElementById('screen');
var max=999999999999,min=-999999999999;
var sign=null;
var num1=null;
var num2=null;
var dung=false;
function active(para){
	if(dung){screen.innerText=0;dung=false;}
	if(screen.innerText<max && screen.innerText>min){
		screen.innerText=Number(screen.innerText+para.innerText);
	}
}
function activeCham(){
	if(screen.innerText.indexOf('.')==-1){
		screen.innerText+='.';
	}
}
function del(){
	if(screen.innerText.length==1){
		screen.innerText=0;
		sign=num1=num2=null;dung=false;
	}else{
		screen.innerText=screen.innerText.slice(0,screen.innerText.length-1);
	}
}
function dellAll(){
	sign=num1=num2=null;dung=false;
	screen.innerText=0;
}
function dau(para){
	dung=true;
	if(num1==null){
		num1=Number(screen.innerText);dung=true;
		console.log('num1='+num1);
	}
	else if(num2==null ){
		num2=Number(screen.innerText);
		console.log(sign);
		console.log('num2='+num2);
		num1=screen.innerText=tinhtoan(sign);
		console.log('kq='+num1);
		num2=null;	
	}
	sign = para.innerText;
}
function tinhtoan(sign){
	var rs;
	switch(sign){
		case '+':
			rs=num1+num2;
			break;
		case '-':
			rs=num1-num2;
			break;
		case 'x':
			rs=num1*num2;
			break;
		case '÷':
			rs=num1/num2;
			break;
		case '%':
			rs=num1%num2;
			break;
	}
	if(rs>max || rs<min) rs='infinity';
	return rs;
}
function bang(para){
	switch(para.innerText){
		case '=':{
			if(sign != null){
				if(num1==null){
					num1=Number(screen.innerText);
					dung=true;
				}
				else if(num2==null ){
					num2=Number(screen.innerText);
					screen.innerText=tinhtoan(sign);
					num1=num2=null;
				}
				sign=null;
				}
			}break;
		case '√':{
				screen.innerText=Math.sqrt(Number(screen.innerText));
			}break;
		case '±':{
				screen.innerText=Number(screen.innerText)*(-1);
			}break;
		case '1/x':{
				screen.innerText=1/Number(screen.innerText);
			}break;
		case 'x!':{
				var rs=1;
				if(Number(screen.innerText)>999999){
					rs='Infinity'
				}else{
					for(var i=1;i<=Number(screen.innerText);i++){
						rs=rs*i;
					}
				}
				screen.innerText=rs;
			}break;
	}
}