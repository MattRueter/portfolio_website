

export const ProjectCard = ({cardContent}) => {

	return(
		<div className={"card"} id={`port${cardContent.id}`}>
			<h1>{cardContent.projectName}</h1>
			<h2>{cardContent.description}</h2>
			<a href={cardContent.codeLink}>Source Code</a>
			<a href={cardContent.siteLink}>VISIT SITE</a>
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
export const BlogCard = ({id,cardContent, link}) => {	
	const openBlog = () => {
		console.log("opening article.")
	};
	return (
		<div className={"card"} id={id} onClick={openBlog}>
			<h1>{cardContent.title}</h1>
			<p>{cardContent.description}</p>
			<a href={link}>Go to article</a>
		</div>
	)
}