import {BrowserRouter, Routes, Route} from "react-router-dom";
import BlogPage from "./Pages/Blog_page.js";
import AntiPortfolioPage from "./Pages/AntiPortfolio_page.js";
import PortfolioPage from "./Pages/Portfolio_page.js";
import AboutMePage from "./Pages/AboutMe_Page";
import Homepage from "./Pages/Homepage.js";


export default function RouteSwitch () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage/>}/>
				<Route path="/aboutme" element={<AboutMePage/>}/>
				<Route path="/portfolio" element={<PortfolioPage/>}/>
				<Route path="/antiportfolio" element={<AntiPortfolioPage/>}/>
				<Route path="/blog" element={<BlogPage />}/>
			</Routes>
		</BrowserRouter>
	)
}