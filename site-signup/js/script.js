$('input').attr('required','required');
for(var i=1;i<=31;i++){
	$('#date').append('<option value="'+i+'" >'+i+' </option>');
}
for(var i = 1; i<=12;i++){
	$('#month').append('<option value="'+i+'" >'+i+' </option>');
}
for(var i = 1950; i<= new Date().getFullYear() ;i++){
	$('#year').append('<option value="'+i+'" >'+i+' </option>');
}
