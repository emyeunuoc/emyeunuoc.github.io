for(var i=1;i<=31;i++){
	$('#date').append('<option value="'+i+'" >'+i+' </option>');
}
for(var i = 1; i<=12;i++){
	$('#month').append('<option value="'+i+'" >'+i+' </option>');
}
for(var i = 1950; i<= new Date().getFullYear() ;i++){
	$('#year').append('<option value="'+i+'" >'+i+' </option>');
}
$('#form-register').on('submit',function(){
	var flag=true;
	if(!checkname()){
		$('#div-hoten .fa-exclamation-triangle').show();
		flag=false;
	}else{
		$('#div-hoten .fa-exclamation-triangle').hide();
	}	
	if(!checkEmail()){
		$('#div-email .fa-exclamation-triangle').show();
		flag=false;
	}else{
		$('#div-email .fa-exclamation-triangle').hide();
	}
	if(!checkPhone()){
		$('#div-sdt .fa-exclamation-triangle').show();
		flag=false;
	}else{
		$('#div-sdt .fa-exclamation-triangle').hide();
	}
	if(!checkFB()){
		$('#div-fb .fa-exclamation-triangle').show();
		flag=false;
	}else{
		$('#div-fb .fa-exclamation-triangle').hide();
	}
	if(!checkBD()){
		$('#div-bd .fa-exclamation-triangle').show();
		flag=false;
	}else{
		$('#div-bd .fa-exclamation-triangle').hide();
	}
	if(!checkPass()){
		$('#div-pass .fa-exclamation-triangle').show();
		flag=false;
	}else{
		$('#div-pass .fa-exclamation-triangle').hide();
	}
	if(!checkGender()){
		$('#div-gender .fa-exclamation-triangle').show();
		flag=false;
	}else{
		$('#div-gender .fa-exclamation-triangle').hide();
	}
	return flag;
});
$('input').on('focus',function(){
	$(this).parent('div').children('i').children('p').show();
});
$('input').on('focusout',function(){
	$(this).parent('div').children('i').children('p').hide();
});
$('select').on('focus',function(){
	$(this).parent('div').children('i').children('p').show();
});
$('select').on('focusout',function(){
	$(this).parent('div').children('i').children('p').hide();
});






function checkname(){
	if($('#firstName').val().trim().length <=0 || $('#firstName').val().trim().length >30)
		return false;
	if($('#lastName').val().trim().length <=0 || $('#firstName').val().trim().length >30)
		return false;
	if($('#firstName').val().trim().match(/[0-9]/)!=null )
		return false;
	if($('#lastName').val().trim().match(/[0-9]/)!=null )
		return false;
	return true;
}
function checkPhone(){
	if($('#sdt').val().trim().length <=9 || $('#sdt').val().trim().length >11)
		return false;
	if($('#sdt').val().trim().match(/[a-z]/)!=null )
		return false;
	return true;
}
function checkEmail(){
	if($('#email').val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)!=null )
		return true;
	return false;
}
function checkFB(){
	if($('#fb').val().trim().match(/facebook.com/)!=null )
		return true;
	return false;
}
function checkPass(){
	if($('#pass').val().trim().length <=5|| $('#sdt').val().trim().length >12)
		return false;
	return true;
}
function checkBD(){
	if($('#date').val() && $('#month').val() && $('#year').val()){
		return true;
	}
	return false;
}
function checkGender(){
	if($('#nam').is(':checked') || $('#nu').is(':checked'))
		return true;
	return false;
}


	
