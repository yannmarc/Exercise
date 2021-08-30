const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');
const bars = document.querySelectorAll('.bar');
toggle.addEventListener('click', function(){
	menu.classList.toggle('active');
	bars[0].classList.toggle('active');
	bars[1].classList.toggle('active');
	bars[2].classList.toggle('active');
})