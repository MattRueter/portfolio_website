import { Navbar } from "../Navbar"

function Homepage() {
  return (
    <div id={"homePage"}>
			<Navbar className={"navHome"} currentPage={"/"}/>
		</div>
  )
}

export default Homepage;
