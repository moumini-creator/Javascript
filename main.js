var mouseDown = false;

window.addEventListener("load", event => {
	console.log("loaded");
	main();
});

//Dessine un rectangle
const drawRect = () => {

	var div = document.createElement('div');
	document.body.append(div);

	for(var i = 1 ; i < 11; i++){

	var canvas = document.createElement('canvas');
	(div).appendChild(canvas);

	canvas.id = i;
	var context = canvas.getContext('2d');

	canvas.style.marginLeft = 50 + 'px';
	canvas.style.marginRight = 300 + 'px';
	context.beginPath();
	context.fillStyle = "#399E";
	context.fill();
	context.fillRect(25, 25, 100, 100);
	}

}

const clickRect = () => {

	let rect = document.getElementById('3');
	if( !mouseDown ) { return; }

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


window.addEventListener('mousemove', clickRect );
window.addEventListener('mousedown', () => { mouseDown = true; });
window.addEventListener('mouseup', () => { mouseDown = false; });
