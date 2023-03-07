import { Navbar } from "../Components/Navbar"
import { ProjectCard } from "../Components/Card";
import { InfoCard } from "../Components/Card";
import { IconBox } from "../Components/IconBox";

const infoCard =[
	{
		id:"portfolioInfo",
		description: `These projects represent the latest in my development. 
			I'm still adding to them as my skills evolve and have tried to build them in a way which scales easily. `,
	}
]

const projectList =[
	{
		id:"0",
		projectName:"ShopIt",
		description:`Genre: E-commerce`,
		siteLink: "https://MattRueter.github.io/Shop-It/",
		codeLink:"https://github.com/MattRueter/Shop-It",
	},
	{
		id:"1",
		projectName:"Idiom",
		description:`Genre: Education, Foreign Languages, Games`,
		siteLink: "https://mattrueter.github.io/IDIOM/",
		codeLink:"https://github.com/MattRueter/IDIOM",
	},
	{
		id:"2",
		projectName:"Nearby Markets",
		description:`Genre: E-commerce`,
		siteLink: "https://v42-geckos-20.vercel.app",
		codeLink:"https://github.com/chingu-voyages/v42-geckos-team-20",
	},
	{
		id:"3",
		projectName:"Lyst",

		description:`Genre: Productivity App`,
		siteLink: "",
		codeLink:"https://github.com/MattRueter/LyST",
	},
	{
		id:"4",
		projectName:"This site",
		description:`Genre: Static site`,
		siteLink: "",
		codeLink:"https://github.com/MattRueter/portfolio_website",
	},
]

export default function PortfolioPage() {
	const projects = projectList.map((item,index) =>{
		return(
			<ProjectCard cardContent={item} key={index}/>
		)
	});
	return (
		<div>
			<Navbar className={"navPages"} currentPage={"/portfolio"} iconBoxClass={"iconBoxPages"} navBarLinksClass={"linksBoxPages"}/>						
			<main className={"CardContainer"}>
				<InfoCard  id={infoCard[0].id} cardContent={infoCard[0].description}/>
				{projects}
				<IconBox id={"iconBox0"}/>
			</main>			
		</div>
	)
}