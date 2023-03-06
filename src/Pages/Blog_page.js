import { Navbar } from "../Components/Navbar"
import { BlogCard } from "../Components/Card";

const blogList = [
	{
		id:"blog0",
		title:"My Blog",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`
	},
	{
		id:"blog1",
		title:"Another Blog",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`
	},
	{
		id:"blog2",
		title:"Blogging",
		description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Duis nec nisi dictum, tincidunt eros in, tempor mi.`
	}
]

export default function BlogPage (){
	const blogs = blogList.map((item,index) =>{
		return(
			<BlogCard  id={item.id} cardContent={item} key={index}/>
		)
	});
	return (
		<div>
			<Navbar className={"navPages"} currentPage={"/blog"} iconBoxClass={"iconBoxPages"}/>
			<main className={"CardContainer"}>
				{blogs}
			</main>
		</div>
	)
}