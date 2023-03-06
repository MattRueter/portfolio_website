import { Navbar } from "../Components/Navbar"
import { ProjectCard } from "../Components/Card";


const cardContent =[
	{
		projectName:"My portfolio description:",
		image:"an image here",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`,
		siteLink: "url here",
		codeLink:"url here",
		cardStyles:{ 
			backgroundColor: "#9c9cb8",
			color:"#1e1e4b",
			border: "3px solid #3f3f6a",
			borderRadius:"2px",
			boxShadow: "none",
			gridColumn: "14 / span 4",
			gridRow: "3 / span 11",
		}
	},
	{
		projectName:"ShopIt",
		image:"an image here",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`,
		siteLink: "url here",
		codeLink:"url here",
		cardStyles:{ 
			gridColumn: "3 / span 7",
			gridRow: "10 / span 6",
		}
	},
	{
		projectName:"Idiom",
		image:"an image here",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`,
		siteLink: "url here",
		codeLink:"url here",
		cardStyles:{ 
			gridColumn: "3 / span 4", 
			gridRow: "2 / span 8",
		}
	},
	{
		projectName:"Nearby Markets",
		image:"an image here",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`,
		siteLink: "url here",
		codeLink:"url here",
		cardStyles:{ 
			gridColumn: "7 / span 6",
			gridRow: "2 / span 4",
		}
	},
	{
	projectName:"Lyst",
	image:"an image here",
	description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
	Duis nec nisi dictum, tincidunt eros in, tempor mi.`,
	siteLink: "url here",
	codeLink:"url here",
	cardStyles:{ 
		gridColumn: "7 / span 6",
		gridRow: "6 / span 4",
		}
	},
	{
		projectName:"This site",
		image:"an image here",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`,
		siteLink: "url here",
		codeLink:"url here",
		cardStyles:{ 
			gridColumn: "10 / span 3",
			gridRow: "10 / span 6",
			}
		},

]




export default function PortfolioPage() {
	return (
		<div>
			<Navbar className={"navPages"} currentPage={"/portfolio"} iconBoxClass={"iconBoxPages"} />
			<main className={"CardContainer"}>
				<ProjectCard cardContent={cardContent[0]}/>
				<ProjectCard cardContent={cardContent[1]}/>
				<ProjectCard cardContent={cardContent[2]}/>
				<ProjectCard cardContent={cardContent[3]}/>
				<ProjectCard cardContent={cardContent[4]}/>
				<ProjectCard cardContent={cardContent[5]}/>
			</main>
		</div>
	)
}