window.addEventListener("load", event => {
	console.log("loaded");
	main();
});

const onClick = event =>{
	console.log("clicked!");
	console.log(event.clientX);	
}

//Dessine un rectangle
const drawRect = () => {

	let canvas = document.createElement('canvas');
	canvas.id = 'idCanvas';
	let context = canvas.getContext('2d');
	
	context.fillStyle = "#399E";
	context.fillRect(25, 25, 100, 100);

	document.body.appendChild(canvas);
}


const moveRect = () =>{
	let rect = document.getElementById('idCanvas');
	rect.addEventListener('mousedown', (event)=>{
		rect = event.clientX;
		rect.y = event.clientY;
		console.log("loop");
	});
	
}
setInterval(moveRect, 10);

const main = event => {
	
	console.log("MAIN");
	
	let div = document.createElement("div");
	document.body.appendChild(div);

	div.addEventListener('clic', onClick);

	drawRect();
	moveRect();
}
