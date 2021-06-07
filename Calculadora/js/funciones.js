
let p1 = document.getElementById('pantalla1');
let p2 = document.getElementById('pantalla2');
let calculadora = document.getElementById('Pantalla');

function agregar(num){
	p1.innerHTML+=num;
	calcular();
}

function calcular(){
	p2.innerHTML=eval(p1.innerHTML);
}

function borrar(){
	p1.innerHTML="";
	p2.innerHTML="";
}

function resultado(){
	p1.innerHTML=p2.innerHTML;
	p2.innerHTML="";
}

function Claro(){ 
	calculadora.classList.add('claro');	
	calculadora.classList.remove('oscuro'); 	
	//guardamos en la variable boton los elementos del HTML
	//que tengan la clase ".boton" 	
	let boton=document.querySelectorAll('.boton'); 		
	let t=boton.length; 
	
	for(i=t-1;i>=0;i--){ 		
		boton[i].classList.remove('toscuro'); 		
		boton[i].classList.add('tclaro'); 	
	} 	
		p1.classList.remove('toscuro'); 	
		p1.classList.add('tclaro'); 	
	document.querySelector('.fa-sun').classList.add('activado'); 	
	document.querySelector('.fa-moon').classList.remove('activado');
	document.querySelector('body').classList.remove('claro');
	document.querySelector('body').classList.add('oscuro');
	document.querySelector('input').classList.remove('oscuro');
	document.querySelector('input').classList.add('claro');

}

function Oscuro(){
	calculadora.classList.add('oscuro');
	calculadora.classList.remove('claro');
	//guardamos en la variable boton los elementos del HTML
	//que tengan la clase ".boton"
	let boton=document.querySelectorAll('.boton');
	let t=boton.length;
	for(i=t-1;i>=0;i--){
		boton[i].classList.remove('tclaro');
		boton[i].classList.add('toscuro');
	}
	p1.classList.remove('tclaro');
	p1.classList.add('toscuro');
	document.querySelector('.fa-moon').classList.add('activado');
	document.querySelector('.fa-sun').classList.remove('activado');
	document.querySelector('body').classList.add('claro');
	document.querySelector('body').classList.remove('oscuro');
	document.querySelector('input').classList.add('oscuro');
	document.querySelector('input').classList.remove('claro');
}
