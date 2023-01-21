export const navHome ={
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "space-evenly",
	border:"20px solid rgb(23, 23, 69)",
	boxShadow: "inset 0px 0px 80px rgb(23, 23, 69)",
	backgroundColor: "#3f3f6a",
	color: "whitesmoke",
	fontSize:"20px",
	gridColumnStart: "10",
	gridColumnEnd:"25",
	gridRowStart: "5",
	gridRowEnd: "15"
}
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


export function Navbar({style}){
	return(
		<nav style={style}>
			<div>Background</div>
			<div>Portfolio</div>
			<div>Anti-portfolio</div>
			<div>Blog</div>
		</nav>
	)
}
