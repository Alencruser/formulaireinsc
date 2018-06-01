window.addEventListener('load',function(){
	document.getElementById('res').reset();
});
var lab;
function stocker(){
	if($(':input')[5].checked){
	lab="Homme"
} else {
	lab='Femme'
}
    var store={"Nom:": $('#firstname').val(),"Prenom":$('#lastname').val(),"Pseudo":$('#pseudo').val(),"Motdepasse":$('#pass').val(),"Sexe":lab};
	localStorage.setItem($(':input')[2].value,JSON.stringify(store))
}
function recuperer(){
	var stocked=localStorage.getItem('Alencruser')
	console.log(JSON.parse(stocked))
}
$('.disp').keyup(function(){
	var x = $('#'+$(this).attr('data'))
	x.css('display','inline');
	setTimeout(turnback,10000);
	function turnback(){
		x.css('display','none')
	}
})