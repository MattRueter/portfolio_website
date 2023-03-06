import { Navbar } from "../Components/Navbar"

function Homepage() {
  return (
    <div id={"homePage"}>
			<Navbar className={"navHome"} currentPage={"/"} iconBoxClass={"iconBoxHome"} navBarLinksClass={"navBarlinksHome"}/>
		</div>
  )
}

export default Homepage;
