import { Navbar } from "../Components/Navbar"

function Homepage() {
  return (
    <div id={"homePage"}>
			<Navbar className={"navHome"} currentPage={"/"} iconBoxClass={"iconBoxHome"}/>
		</div>
  )
}

export default Homepage;
