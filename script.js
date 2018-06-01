window.addEventListener('load',function(){
	document.getElementById('res').reset();
});
$('.disp').keyup(function(){
	var x = $('#'+$(this).attr('data'))
	$('#'+$(this).attr('data')).css('display','inline');
	setTimeout(turnback,10000);
	function turnback(){
		x.css('display','none')
	}
})
