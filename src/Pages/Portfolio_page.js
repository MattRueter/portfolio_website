import { Navbar } from "../Components/Navbar"
import { ProjectCard } from "../Components/Card";
import { InfoCard } from "../Components/Card";
import { IconBox } from "../Components/IconBox";

const infoCard =[
	{
		id:"portfolioInfo",
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`,
	}
]

const projectList =[
	{
		id:"0",
		projectName:"ShopIt",
		image:"an image here",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`,
		siteLink: "url here",
		codeLink:"url here",
	},
	{
		id:"1",
		projectName:"Idiom",
		image:"an image here",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`,
		siteLink: "url here",
		codeLink:"url here",
	},
	{
		id:"2",
		projectName:"Nearby Markets",
		image:"an image here",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`,
		siteLink: "url here",
		codeLink:"url here",
	},
	{
		id:"3",
		projectName:"Lyst",
		image:"an image here",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`,
		siteLink: "url here",
		codeLink:"url here",
	},
	{
		id:"4",
		projectName:"This site",
		image:"an image here",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`,
		siteLink: "url here",
		codeLink:"url here",
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