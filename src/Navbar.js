import { Link } from "react-router-dom";

export const navPages ={
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "space-evenly",
	border:"1px solid rgb(23, 23, 69)",
	backgroundColor: "white",
	color: "rgb(23, 23, 69)",
	fontSize:"20px",
}


export function Navbar({className}){
	return(
		<nav id ={"navbar"} className={className}>
			<Link to={"/background"}>Background</Link>
			<Link to={"/portfolio"}>Portfolio</Link> 
			<Link to={"/antiportfolio"}>Anti-portfolio</Link>
			<Link to={"/blog"}>Blog</Link>
		</nav>
	)
}
