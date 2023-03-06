

export const ProjectCard = ({cardContent}) => {

	return(
		<div className={"card"} id={`port${cardContent.id}`}>
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
		<div className={"card"} id={id}>
			{cardContent}
		</div>
	)
}