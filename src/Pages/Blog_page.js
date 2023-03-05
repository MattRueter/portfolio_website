import {Navbar } from '../Navbar.js';

export default function BlogPage (){
	return (
		<div>
			<Navbar className={"navPages"} currentPage={"/blog"} iconBoxClass={"iconBoxPages"}/>
			<h1>Blog</h1>
			<h2>Here and there.</h2>
			<p>blog</p>
			<p>blog</p>
			<p>blog</p>
			<p>blog</p>
		</div>
	)
}