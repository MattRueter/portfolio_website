import { Navbar } from "../Components/Navbar"
import { InfoCard } from "../Components/Card";
import { Title } from "../Components/Title";


const cardContent = [
	{
		id:"background0",
		description:`My name is Matt Rueter and I am a self-taught developer. 
			I began retraining in web development at the start of June 2021 after stumbling on the idea one day. I really took to it and so decided to pursue learning more.
			I enjoy the problem solving it involves and have noticed that the process of turning the once mysterious looking code into
			something understandable is somewhat similar to learning a foreign language, which is something else I enjoy doing. I'm eager and looking forward to 
			turning this into a full-time job sometime soon.`,


	},
	{
		id:"background1",
		description:`Previously I had been working at a language academy in Spain. I taught English to all ages and at all levels and 
		eventually took on various management roles including, ultimately, Assistant Director of Studies. This role required being involved in most aspects of the business
		and considering how decisions might affect all stake-holders.`
	},
	{
		id:"goals",
		description:`I'm hoping to find work as a junior developer in a company which will provide me with opportunities to
		learn even more tools and skills. In return, I believe I currently have the skills and discipline to contribute actively from day 
		one in some area of the codebase. I'd ideally like to combine my interest in languages with development, possibly working on language learning apps
		or other educational tools. But really I enjoy working on almost anything.`
	},
	{
		id:"skills",
		description:`I feel I currently have the knowledge and skill level in client-side development to contribute practically to a project. I am currently learning server-side
		development and hope within a short period of time to be much more comfortable working on the back-end. My previous experience, though not related to development, is rich with
		transferable skills which when combined with my programming abilities would make me a useful asset to a team. `
	}
]
const titleList = [
	{
		id:"title0",
		title: "Background"
	},
	{
		id:"title1",
		title:"What I'm Looking For:"
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
				{infocards[1]}
				{titles[1]}
				{infocards[2]}
				{titles[2]}
				{infocards[3]}
			<div id={"pusher"}></div>
			</main>
		</div>
	)
}