
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
			<div>Background</div>
			<div>Portfolio</div>
			<div>Anti-portfolio</div>
			<div>Blog</div>
		</nav>
	)
}
