let productos =[[0,"Coca",12],
				[1,"Galletas",10],
				[2,"Agua",12],
				[3,"Panditas",10],
				[4,"Picafresas",1],
				[5,"Helado",12],
				[6,"Pizza",15],
				[7,"Manzana",5]];
let carrito=[];

var contador = 0;
var contador2 = 1;

window.addEventListener("load",cargar);
function cargar(){
	s=document.querySelector('section');
	for(i=0; i<productos.length; i++ ){
		s.innerHTML+="<div class='pc' id='"+productos[i][0]+"'>"+
					"<h1>"+productos[i][1]+"</h1>"+
					"<p>$"+productos[i][2]+"</p>"+
					"<button onclick='agregar("+productos[i][0]+")'>+</button>"+
					"</div>"
	}
}

function eliminarElemento(id){
	lista = document.getElementById('listaCarrito');	
	if (!lista){
	} else {
		padre = lista.parentNode;
		padre.removeChild(lista);
	}
}


function agregar(id){
	if(contador2>=1){
			contador2=1;
	}else{
		alert("Actualice el carrito");
		contador2=0;
	}
	carrito.push(id);
	document.querySelector('s').innerHTML=carrito.length;
	contador=0;
	for(i=0; i<carrito.length; i++){
	eliminarElemento('listaCarrito');
	contador2=1;
	}


}

function mostrarCarrito(){
	listaProductos = document.querySelector('nav');
	
	if(contador==0){
		for(i=0;i<carrito.length; i++){
			for(j=0;j<productos.length;j++){
				if(productos[j][0]==carrito[i]){
					// listaProductos+="- "+ productos[j][1]+" $"+productos[j][2]+"\n";
					listaProductos.innerHTML += " <div id='listaCarrito'>"+
													"<h1>"+ productos[j][1] + "</h1>"+
													"<p>$"+ productos[j][2] + "</p>"+
												" </div ";
					contador=1;									
				}
			}
		}
	}
}

function visibilidad(){
	if(contador2==1){
		document.querySelector('nav').classList.toggle("visible");
		document.querySelector('section').classList.toggle("sn");
		contador2=0;
	}else{
		document.querySelector('nav').classList.toggle("visible");
		document.querySelector('section').classList.toggle("sn");
	}
mostrarCarrito();
}				