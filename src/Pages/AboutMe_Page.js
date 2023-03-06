import { Navbar } from "../Components/Navbar"
import { InfoCard } from "../Components/Card";
import { Title } from "../Components/Title";


const cardContent = [
	{
		id:"background0",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi. 
		Donec in vulputate neque, eu accumsan ante. Fusce eu ex vitae lectus lacinia commodo eget faucibus turpis. 
		Duis posuere orci id egestas elementum. 
		Cras congue nisi eu dolor tristique, vel gravida purus auctor. 
		Nunc non purus ac elit maximus iaculis viverra sit amet libero. 
		Sed sed porttitor ante. Mauris accumsan est eget elit vehicula, in finibus sem rhoncus. 
		Aliquam erat volutpat.`,

	},
	{
		id:"background1",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi. 
		Donec in vulputate neque, eu accumsan ante. Fusce eu ex vitae lectus lacinia commodo eget faucibus turpis. 
		Duis posuere orci id egestas elementum. 
		Cras congue nisi eu dolor tristique, vel gravida purus auctor. 
		Nunc non purus ac elit maximus iaculis viverra sit amet libero. 
		Sed sed porttitor ante. Mauris accumsan est eget elit vehicula, in finibus sem rhoncus. 
		Aliquam erat volutpat.`,
	},
	{
		id:"goals",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi. 
		Donec in vulputate neque, eu accumsan ante. Fusce eu ex vitae lectus lacinia commodo eget faucibus turpis. 
		Duis posuere orci id egestas elementum. `
	},
	{
		id:"skills",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi. 
		Donec in vulputate neque, eu accumsan ante. Fusce eu ex vitae lectus lacinia commodo eget faucibus turpis. 
		Duis posuere orci id egestas elementum. `
	}
]
const titleList = [
	{
		id:"title0",
		title:"What I'm Looking For:"
	},
	{
		id:"title1",
		title: "Background"
	},
	{
		id:"title2",
		title: "Skills"
	}
]

export default function BackgroundPage (){
	const infocards = cardContent.map(item=>{
		return(
			<InfoCard id={item.id}cardContent={item.description} key={item.id}/>
		)	
	});

	const titles = titleList.map((title,index) =>{
		return (
			<Title content={title} key={index}/>
		)
	});
	return (
		<div>
			<Navbar className={"navPages"} currentPage={"/background"} iconBoxClass={"iconBoxPages"} navBarLinksClass={"linksBoxPages"}/>
			<main className={"CardContainer"}>
				{titles[0]}
				{infocards[0]}
				{titles[1]}
				{infocards[1]}
				{infocards[2]}
				{titles[2]}
				{infocards[3]}
			</main>
		</div>
	)
}