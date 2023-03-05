import { Navbar } from "../Components/Navbar"

export default function PortfolioPage (){
	return (
		<div>
			<Navbar className={"navPages"} currentPage={"/portfolio"} iconBoxClass={"iconBoxPages"}/>
			<h1>PORTFOLIO</h1>
			<h2>Latest and best projects so far...</h2>
			<p>A project here.</p>
		</div>
	)
}