window.addEventListener('load',function(){
	document.getElementById('res').reset();
});
var store={[$('#firstname').attr('placeholder')]: [$('#firstname').val()],[$('#lastname').attr('placeholder')]:[$('#lastname').val()],[$('#mdp').attr('placeholder')]:[$('#mdp').val()]};
$('.disp').keyup(function(){
	var x = $('#'+$(this).attr('data'))
	$('#'+$(this).attr('data')).css('display','inline');
	setTimeout(turnback,10000);
	function turnback(){
		x.css('display','none')
	}
})
function stocker(){
	localStorage.setItem($('#pseudo').val(),JSON.stringify(store))
}
	function recuperer(){
	var stocked=localStorage.getItem('Simon')
	console.log(JSON.parse(stocked))
}