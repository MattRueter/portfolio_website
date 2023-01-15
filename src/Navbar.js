const navHome ={
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "space-evenly",
	position: "absolute",
	top:"25%",
	left: "35%",
	border:"2px solid black",
	boxShadow: "inset 0px 0px 10px black",
	backgroundColor: "#3f3f6a",
	color: "whitesmoke",
	fontSize:"20px",
	width:"30%",
	height:"30%"

}


export default function Navbar(){
	return(
		<nav style={navHome}>
			<div>Background</div>
			<div>Portfolio</div>
			<div>Anti-portfolio</div>
			<div>Blog</div>
		</nav>
	)
}