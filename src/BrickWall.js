import './index.css';

let size = selectSize();
function selectSize (){
	let size =[]
	const number = Math.floor(Math.random() * 100);
	for(let i = 0; i < number; i++){
		size.push(i);
	}
	return size;
}

function selectColor (){
	let color = ""
	const number =Math.floor(Math.random() * 10);
	if(number < 5){
		color = "brickDark"
	}else if(number >= 5){
		color = "brickLight"
	}
	return color;
}


export default function BrickWall (){
	const bricks = size.map((brick)=>{
		let key =brick;
		return(
			<Brick key={key} color = {selectColor()} />
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