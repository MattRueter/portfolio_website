import './index.css';


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
	return (
		<div id="brickWall">
			<Brick color={selectColor()}/>
		</div>
	)
}

function Brick({color}){
	return (
		<div className={color}></div>
	)
}