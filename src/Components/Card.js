

export const Card = ({cardContent}) => {
	return(
		<div className={"card"} style={cardContent.cardStyles}>
			<h1>{cardContent.projectName}</h1>
			<div className={"cardImage"}>{cardContent.image}</div>
			<p>{cardContent.description}</p>
			<p>{cardContent.codeLink}</p>
			<p>{cardContent.siteLink}</p>
		</div>
	)
}
export const InfoCard = ({id,cardContent}) => {
	return(
		<div className={"card"} id={`backGround${id}`}>
			{cardContent}
		</div>
	)
}