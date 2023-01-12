import './index.css';

let size = selectSize();
function selectSize (){
	let size =[]
	const number = Math.floor(Math.random() * 500);
	for(let i = 0; i < number; i++){
		size.push(i);
	}
	return size;
}

function selectClass (){
	let color = ""
	const number =Math.floor(Math.random() * 20);
	if(number >=0 && number <=5){
		color = "brickDarkShort"
	}else if(number > 5 && number <=10){
		color = "brickLightShort"
	}else if(number > 10 && number <=15){
		color = "brickDarkLong"
	}else if(number > 15 && number <=20){
		color = "brickLightLong"
	}else{
		color ="brickError"
		console.log(number)
	}
	return color;
}


export default function BrickWall (){
	
	const bricks = size.map((brick)=>{
		let key =brick;
		return(
			<Brick key={key} color = {selectClass()} />
		)
	});

	return (
		<div id="brickWall">
			{bricks}
		</div>
	)
}

function Brick({color}){
	return (
		<div className={color}></div>
	)
}