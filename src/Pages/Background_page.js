import { Navbar } from "../Components/Navbar"
import { Card } from "../Components/Card";

const retrainingInfo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
	Duis nec nisi dictum, tincidunt eros in, tempor mi. 
	Donec in vulputate neque, eu accumsan ante. Fusce eu ex vitae lectus lacinia commodo eget faucibus turpis. 
	Duis posuere orci id egestas elementum. 
	Cras congue nisi eu dolor tristique, vel gravida purus auctor. 
	Nunc non purus ac elit maximus iaculis viverra sit amet libero. 
	Sed sed porttitor ante. Mauris accumsan est eget elit vehicula, in finibus sem rhoncus. 
	Aliquam erat volutpat.`
const previousInfo =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
	Duis nec nisi dictum, tincidunt eros in, tempor mi. 
	Donec in vulputate neque, eu accumsan ante. Fusce eu ex vitae lectus lacinia commodo eget faucibus turpis. 
	Duis posuere orci id egestas elementum. 
	Cras congue nisi eu dolor tristique, vel gravida purus auctor. 
	Nunc non purus ac elit maximus iaculis viverra sit amet libero. 
	Sed sed porttitor ante. Mauris accumsan est eget elit vehicula, in finibus sem rhoncus. 
	Aliquam erat volutpat.`

const cardStyles =[
	{
	gridColumn: "2 / span 11", 
	gridRow: "2 / span 9",
	fontSize:"2rem",
	},
	{
	gridColumn: "4 / span 13", 
	gridRow: "11 / span 8",
	fontSize:"2rem",
	}
]
export default function BackgroundPage (){
	return (
		<div>
			<Navbar className={"navPages"} currentPage={"/background"} iconBoxClass={"iconBoxPages"}/>
			<main className={"CardContainer"}>
				<Card  styles={cardStyles[0]} text={retrainingInfo}/>
				<Card  styles={cardStyles[1]} text ={previousInfo}/>
			</main>
		</div>
	)
}