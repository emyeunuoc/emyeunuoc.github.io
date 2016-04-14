function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]).replace('+',' ');
}
var bd=get('ngay')+'/'+get('thang')+'/'+get('nam');
$('#firstName').val(get('firstName'));
$('#lastName').val(get('lastName'));
$('#sdt').val(get('sdt'));
$('#email').val(get('email'));
$('#fb').val(get('fb'));
$('#pass').val(get('pass'));
$('#bd').append(bd);
$('#'+get('gender')).attr('checked','checked');