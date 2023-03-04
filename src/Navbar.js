import { Link } from "react-router-dom";

const Linkslibrary = [ 
	{route: "/", name:"Home" },
	{route: "/background", name:"Background" },
	{route: "/portfolio", name:"Portfolio" },
	{route: "/antiportfolio", name:"Anti-portfolio" },
	{route: "/blog", name:"Blog" },
];

export function Navbar({className, currentPage}){
	const pageLinks = Linkslibrary.filter(item => item.route !==currentPage);
	const links = pageLinks.map((link,index) =>{
		return(
			<Link to={link.route} key={index}>{link.name}</Link>
		)
	});
	return(
		<nav id ={"navbar"} className={className}>
			{links}
			<div id={"contactBox"}>
				<a href={"https://github.com/MattRueter"}>GITHUB</a>
				<a href={"https://www.linkedin.com/in/matthew-rueter-19824340/en?trk=people-guest_people_search-card"}>LinkedIn</a>
			</div>
		</nav>
	)
}
