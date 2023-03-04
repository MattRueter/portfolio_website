import {Navbar } from '../Navbar.js';

export default function PortfolioPage (){
	return (
		<div>
			<Navbar className={"navPages"} currentPage={"/portfolio"}/>
			<h1>PORTFOLIO</h1>
			<h2>Latest and best projects so far...</h2>
			<p>A project here.</p>
		</div>
	)
}