import {BrowserRouter, Routes, Route} from "react-router-dom";
import BackgroundPage from "./Background_page.js";
import App from "./App.js";


export default function RouteSwitch () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App/>}/>
				<Route path="/background" element={<BackgroundPage />}/>
				//Route path here (portfolio)
				//Route path here (anti-portfolio)
				//Route path here (blog)
				//Route path here (other things about me)
			</Routes>
		</BrowserRouter>
	)
}