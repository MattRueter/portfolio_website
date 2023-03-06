import { Navbar } from "../Components/Navbar"
import { InfoCard, ProjectCard } from "../Components/Card";

const infoCard =[
	{
		id:"antiPortfolioInfo",
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`,
	}
]
const projectList = [
	
	{
		id:"5",
		projectName:"Guess -who",
		image:"an image here",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`,
		siteLink: "url here",
		codeLink:"url here",
	},
	{
		id:"6",
		projectName:"Library",
		image:"an image here",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`,
		siteLink: "url here",
		codeLink:"url here",
	},
]

export default function AntiPortfolioPage (){
	const projects = projectList.map((item, index) =>{
		return(
			<ProjectCard cardContent={item} key={index}/>
		)
	});
	return (
		<div>
			<Navbar className={"navPages"} currentPage={"/antiportfolio"} iconBoxClass={"iconBoxPages"} navBarLinksClass={"linksBoxPages"}/>
			<main className={"CardContainer"}>
				<InfoCard id={infoCard[0].id} cardContent={infoCard[0].description}/>
				{projects}
			</main>
		</div>
	)
}