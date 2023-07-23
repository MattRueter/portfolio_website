import { Navbar } from "../Components/Navbar"
import { BlogCard } from "../Components/Card";

const blogList = [
	{
		id:"blog0",
		title:"More coming soon",
		description:``
	},
	{
		id:"blog1",
		title:"More coming soon",
		description:``
	},
	{
		id:"blog2",
		link:"https://dev.to/mattrueter/chingu-voyages-make-the-best-use-of-your-voyage-5dcd",
		title:"Chingu Voyages - make the best use of your voyage.",
		description:`If you are a self-taught developer or even a bootcamp graduate, 
		you’ll likely find that while you may feel confident in your technical skills, the idea of...`
	}
]

export default function BlogPage (){
	const blogs = blogList.map((item,index) =>{
		return(
			<BlogCard  id={item.id} cardContent={item} link={item.link}key={index}/>
		)
	});
	return (
		<div>
			<Navbar className={"navPages"} currentPage={"/blog"} iconBoxClass={"iconBoxPages"} navBarLinksClass={"linksBoxPages"}/>
			<main className={"CardContainer"}>
				{blogs}
			</main>
		</div>
	)
}