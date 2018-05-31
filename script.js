window.addEventListener('load',function(){
	document.getElementById('res').reset()
})
document.getElementById('mdp').addEventListener('click',function(){
	document.getElementById('necessaire').style.display='inline';
	setTimeout(turnback,5000);
})
function turnback(){
	document.getElementById('necessaire').style.display='none';
}