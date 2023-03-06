import { Navbar } from "../Components/Navbar"
import { InfoCard } from "../Components/Card";


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
	}

]

export default function BackgroundPage (){
	const infocards = cardContent.map(item=>{
		return(
			<InfoCard id={item.id}cardContent={item.description} key={item.id}/>
		)	
	});

	return (
		<div>
			<Navbar className={"navPages"} currentPage={"/background"} iconBoxClass={"iconBoxPages"} navBarLinksClass={"linksBoxPages"}/>
			<main className={"CardContainer"}>
				{infocards}
			</main>
		</div>
	)
}