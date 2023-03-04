import {BrowserRouter, Routes, Route} from "react-router-dom";
import BackgroundPage from "./Pages/Background_page.js";
import BlogPage from "./Pages/Blog_page.js";
import AntiPortfolioPage from "./Pages/AntiPortfolio_page.js";
import PortfolioPage from "./Pages/Portfolio_page.js";
import Homepage from "./Pages/Homepage";


export default function RouteSwitch () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage/>}/>
				<Route path="/background" element={<BackgroundPage/>}/>
				<Route path="/portfolio" element={<PortfolioPage/>}/>
				<Route path="/antiportfolio" element={<AntiPortfolioPage/>}/>
				<Route path="/blog" element={<BlogPage />}/>
			</Routes>
		</BrowserRouter>
	)
}