var mouseDown = false;

window.addEventListener("load", event => {  // Sert a charger le main
	console.log("loaded");
	main();
});


const drawRect = () => { //Dessine un rectangle

	var div = document.createElement('div'); // Crée une div
	document.body.append(div); // Lie la div au body

	for(var i = 1 ; i < 11; i++){ // Boucle pour afficher les 11 éléments

	var canvas = document.createElement('canvas'); // Crée un canvas
	(div).appendChild(canvas); // Lie le canvas à la div

	canvas.id = i; // Donne un id a chaque balise canvas
	var context = canvas.getContext('2d'); // Récuperer le context du dessin en 2d

	canvas.style.marginLeft = 50 + 'px'; // Affecte une margin aux canvas
	canvas.style.marginRight = 300 + 'px'; // Affecte une margin aux canvas
	context.beginPath(); // Affecte une margin aux canvas
	context.fillStyle = "#399E";  // Remplis le canvas d'une couleur
	context.fill(); //
	context.fillRect(25, 25, 100, 100); // x, y , ., .
	}

}

const clickRect = () => { // Cliquer sur le rectangle

	let rect = document.getElementById('3');
	if( !mouseDown ) { return; } // Si il n'est pas cliquer on sort sinon on est bon

	if (event.clientY > 550){
		rect.style.marginTop = console.log(event.clientY) + 20 + 'px';
	} else if(event.clientY < 70){
		rect.style.marginTop = console.log(event.clientY + rect.offsetTop) - 0 + 'px';
	} else{
		rect.style.marginTop = event.clientY - 80 + 'px';
	}
	console.log("loop");
}


const main = () => {

	console.log("MAIN");
	drawRect();

	var id = document.getElementsByTagName('canvas');
	var num = id.length;
	console.log(num);
}


window.addEventListener('mousedown', () => { mouseDown = true; }); // L'événement à écouter et quand le clique (gauche) est enfoncer pour que le mouseDown prenne la valeur true
window.addEventListener('mousemove', clickRect ); // On dis a l'écran d'écouter l'événement "mouvement de la souris" afin qu'il execute la fonction clickRect
window.addEventListener('mouseup', () => { mouseDown = false; }); // l'événement à écouter par l'écran est le clique (gauche) relacher pour que mouseDown prenne la valeur false
