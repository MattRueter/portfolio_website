import { Navbar } from "../Components/Navbar"
import { ProjectCard } from "../Components/Card";

const cardContent = [
	{
		projectName:"",
		image:"",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`,
		siteLink: "",
		codeLink:"",
		cardStyles:{ 
			backgroundColor: "#9c9cb8",
			color:"#1e1e4b",
			border: "3px solid #3f3f6a",
			borderRadius:"2px",
			boxShadow: "none",
			gridColumn: "3 / span 4",
			gridRow: "3 / span 11",
		}
	},
	{
		projectName:"Guess -who",
		image:"an image here",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`,
		siteLink: "url here",
		codeLink:"url here",
		cardStyles:{ 
			gridColumn: "9 / span 4",
			gridRow: "2/ span 7",
		}
	},
	{
		projectName:"Library",
		image:"an image here",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`,
		siteLink: "url here",
		codeLink:"url here",
		cardStyles:{ 
			gridColumn: "13 / span 4",
			gridRow: "2 / span 7",
		}
	},
	{
		projectName:"",
		image:"",
		description:"",
		siteLink: "",
		codeLink:"",
		cardStyles:{ 
			gridColumn: "9/ span 8",
			gridRow: "9 / span 6",
		}
	},
]

export default function AntiPortfolioPage (){
	return (
		<div>
			<Navbar className={"navPages"} currentPage={"/antiportfolio"} iconBoxClass={"iconBoxPages"}/>
			<main className={"CardContainer"}>
				<ProjectCard cardContent={cardContent[0]}/>
				<ProjectCard cardContent={cardContent[1]}/>
				<ProjectCard cardContent={cardContent[2]}/>
				<ProjectCard cardContent={cardContent[3]}/>
			</main>
		</div>
	)
}