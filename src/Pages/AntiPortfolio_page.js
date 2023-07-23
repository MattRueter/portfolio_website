import { Navbar } from "../Components/Navbar"
import { InfoCard, ProjectCard } from "../Components/Card";

const infoCard =[
	{
		id:"antiPortfolioInfo",
		description: `These are some early learning projects I've since outgrown. I'm still very proud of them but the code deserves some criticism. See their ReadMe's for this.`,
	}
]
const projectList = [
	
	{
		id:"5",
		projectName:"Guess Who",
		description:`Genre: game`,
		siteLink: "https://mattrueter.github.io/guess-who/",
		codeLink:"https://github.com/MattRueter/guess-who",
	},
	{
		id:"6",
		projectName:"Library",
		description:`Genre: personal organization tool`,
		siteLink: "https://mattrueter.github.io/library/",
		codeLink:"https://github.com/MattRueter/library",
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