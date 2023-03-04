import { Link } from "react-router-dom";

const Linkslibrary = [ 
	"/", 
	"/background", 
	"/portfolio", 
	"/antiportfolio", 
	"/blog"
];

export function Navbar({className, currentPage}){
	const pageLinks = Linkslibrary.filter(link => link !==currentPage);
	const links = pageLinks.map(link =>{
		return(
			<Link to={link}>{link}</Link>
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
