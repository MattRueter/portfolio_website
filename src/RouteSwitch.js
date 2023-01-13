import {BrowserRouter, Routes, Route} from "react-router-dom";
import BackgroundPage from "./Background_page.js";
import BlogPage from "./Blog_page.js";
import AntiPortfolioPage from "./AntiPortfolio_page.js";
import PortfolioPage from "./Portfolio_page.js";

import App from "./App.js";


export default function RouteSwitch () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App/>}/>
				<Route path="/background" element={<BackgroundPage/>}/>
				<Route path="/portfolio" element={<PortfolioPage/>}/>
				<Route path="/antiportfolio" element={<AntiPortfolioPage/>}/>
				<Route path="/blog" element={<BlogPage />}/>
				//Route path here (other things about me)
			</Routes>
		</BrowserRouter>
	)
}