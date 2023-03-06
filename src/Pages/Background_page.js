import { Navbar } from "../Components/Navbar"
import { Card } from "../Components/Card";


const cardContent = [
	{
		projectName:"",
		image:"",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi. 
		Donec in vulputate neque, eu accumsan ante. Fusce eu ex vitae lectus lacinia commodo eget faucibus turpis. 
		Duis posuere orci id egestas elementum. 
		Cras congue nisi eu dolor tristique, vel gravida purus auctor. 
		Nunc non purus ac elit maximus iaculis viverra sit amet libero. 
		Sed sed porttitor ante. Mauris accumsan est eget elit vehicula, in finibus sem rhoncus. 
		Aliquam erat volutpat.`,
		siteLink: "",
		codeLink:"",
		cardStyles:{ 
			gridColumn: "2 / span 11", 
			gridRow: "2 / span 8",
			fontSize:"x-large",			
		}
	},
	{
		projectName:"",
		image:"",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi. 
		Donec in vulputate neque, eu accumsan ante. Fusce eu ex vitae lectus lacinia commodo eget faucibus turpis. 
		Duis posuere orci id egestas elementum. 
		Cras congue nisi eu dolor tristique, vel gravida purus auctor. 
		Nunc non purus ac elit maximus iaculis viverra sit amet libero. 
		Sed sed porttitor ante. Mauris accumsan est eget elit vehicula, in finibus sem rhoncus. 
		Aliquam erat volutpat.`,
		siteLink: "",
		codeLink:"",
		cardStyles:{ 
			gridColumn: "4 / span 13", 
			gridRow: "10 / span 7",
			fontSize:"x-large",
		}
	},
	{
		projectName:"",
		image:"",
		description:`Tools I've learned and continue to learn. 
		HTML CSS JS REACT REDUX NODE EXPRESS MONGOdb JEST GIT `,
		siteLink: "",
		codeLink:"",
		cardStyles:{ 
			backgroundColor: "#9c9cb8",
			gridColumn: "2 / span 18", 
			gridRow: "18 / span 3",
			fontSize:"x-large",
		}
	},
]

export default function BackgroundPage (){
	return (
		<div>
			<Navbar className={"navPages"} currentPage={"/background"} iconBoxClass={"iconBoxPages"}/>
			<main className={"CardContainer"}>
				<Card cardContent={cardContent[0]}/>
				<Card cardContent={cardContent[1]}/>
				<Card cardContent={cardContent[2]}/>
			</main>
		</div>
	)
}