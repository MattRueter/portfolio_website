import {Navbar } from './Navbar.js';

export default function BackgroundPage (){
	return (
		<div>
			<Navbar className={"navPages"} currentPage={"/background"}/>
			<main>
				<h1>A little about me.</h1>
				<h2>lalalalalalalalalala</h2>
				<p>And some more details if anyone is interested.</p>
			</main>
		</div>
	)
}