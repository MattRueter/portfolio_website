import { Navbar } from "../Components/Navbar"
import { InfoCard, ProjectCard } from "../Components/Card";

const infoCard =[
	{
		id:"antiPortfolioInfo",
		description: `I've included this as I find it edifying to reflect on earlier projects and understand why they were 
		good or bad and how they could be improved. These two projects were both for different reasons two I really enjoyed 
		working on, however when I look at them now they make me cringe! But working on them set me up to better understand and 
		appreciate subsequent concepts in programming and specifically how Javascript works.`,
	}
]
const projectList = [
	
	{
		id:"5",
		projectName:"Guess -who",
		description:`Genre: game`,
		siteLink: "url here",
		codeLink:"url here",
	},
	{
		id:"6",
		projectName:"Library",
		description:`Genre: personal organization tool`,
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