import { Navbar } from "../Components/Navbar"
import { InfoCard } from "../Components/Card";
import { Title } from "../Components/Title";


const cardContent = [
	{
		id:"background0",
		description:`My name is Matt Rueter and I am a self-taught developer. 
			At the start of June 2021 I began retraining in web-development. It was something I stumbled on one day but really took to it
			right away. I enjoy the the problem solving involved and the process of turning the once mysterious looking code into
			something understandable is similar to learning a foreign language which is something else I enjoy doing. I'm eager and looking forward to 
			turning this into a full-time job sometime soon.`,


	},
	{
		id:"background1",
		description:`Previously I worked for just over 13 at a language academy in Spain. I taught English to all ages and at all levels and 
		eventually took on a management role as Assistant Director of Studies. This role required being involved in most aspects of the business
		and considering how decisions might affect all stake-holders.`
	},
	{
		id:"goals",
		description:`I'm hoping to find work as a juniour developer in a company which will provide me with opportunities to
		learn even more tools and skills. In return I believe I currently have the skills and discipline to contribute actively from day 
		one in some area of the codebase. I'd ideally like combine my interest in languages with development, possibly working on language learning apps
		or other educational tools. But really I enjoy working on almost anything. In development I mostly enjoy the the problem solving required to build something.`
	},
	{
		id:"skills",
		description:`I feel I currently have the knowledge and skill level in React to contribute practically to a project. One of the biggest things I've learnt on the course I've been following
		is how to learn and along with that to embrace running up against knowledge gaps and working through them. I am currently learning server-side
		development and hope within a short period of time to be much more comfortable working on the back-end. `
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
				{titles[1]}
				{infocards[1]}
				{infocards[2]}
				{titles[0]}
				{infocards[0]}
				{titles[2]}
				{infocards[3]}
			</main>
		</div>
	)
}