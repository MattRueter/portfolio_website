import { Navbar } from "../Components/Navbar"
import { Card } from "../Components/Card";

const description =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Duis nec nisi dictum, tincidunt eros in, tempor mi. 
Donec in vulputate neque, eu accumsan ante. Fusce eu ex vitae lectus lacinia commodo eget faucibus turpis. 
Duis posuere orci id egestas elementum. 
.`
const cardStyles = [
	{
		gridColumn: "3 / span 4",
		gridRow: "2 / span 8",
		fontSize: "2rem",
	},
	{
		gridColumn: "3 / span 7",
		gridRow: "10 / span 6",
		fontSize: "2rem",
	},
	{
		gridColumn: "7 / span 6",
		gridRow: "6 / span 4",
		fontSize: "2rem",
	},
	{
		gridColumn: "7 / span 6",
		gridRow: "2 / span 4",
		fontSize: "2rem",
	},
	{
		gridColumn: "10 / span 3",
		gridRow: "10 / span 6",
		fontSize: "2rem",
	},
	{
		backgroundColor: "#d1d4f7",
		color:"#1e1e4b",
		borderRadius:"2px",
		boxShadow:"1px 1px 10px black",
		gridColumn: "14 / span 4",
		gridRow: "3 / span 11",
		fontSize: "2rem",
	}
]
export default function PortfolioPage() {
	return (
		<div>
			<Navbar className={"navPages"} currentPage={"/portfolio"} iconBoxClass={"iconBoxPages"} />
			<main className={"CardContainer"}>
				<Card styles={cardStyles[5]} text={description} />
				<Card styles={cardStyles[0]} text={"IDIOM"} />
				<Card styles={cardStyles[1]} text={"SHOPiT"} />
				<Card styles={cardStyles[2]} text={"LYST"} />
				<Card styles={cardStyles[3]} text={"NEARBY MARKETS"} />
				<Card styles={cardStyles[4]} text={"This site"} />
			</main>
		</div>
	)
}