import './index.css';
import { Navbar } from './Navbar.js'

function selectSize (number){
	let size =[]
	for(let i = 0; i < number; i++){
		size.push(i);
	}
	return size;
}

function selectClass (){
	let color = ""
	const number =Math.floor(Math.random() * 30);
	if(number >=0 && number <=5){
		color = "brickDarkShort"
	}else if(number > 5 && number <=10){
		color = "brickLightShort"
	}else if(number > 10 && number <=15){
		color = "brickDarkLong"
	}else if(number > 15 && number <=20){
		color = "brickLightLong"
	}else if(number > 20 && number <=25){
		color = "brickDarkVertical"
	}else if(number > 25 && number <=30){
		color = "brickLightVertical"
	}
	else{
		color ="brickError"
		console.log(number)
	}
	return color;
}


export default function BrickWall ({number}){
	
	const bricks = selectSize(number).map((brick)=>{
		let key =brick;
		return(
			<Brick key={key} color = {selectClass()} />
		)
	});

	return (
		<div id="brickWall">
			<Navbar className={"navHome"} />
			{bricks}
		</div>
	)
}

function Brick({color}){
	return (
		<div className={color}></div>
	)
}