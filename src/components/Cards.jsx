const Cards = ({ title, category, image }) => {
	return (
		<div>
			<img src={image} alt='image' width={300} />
			<h1>{title}</h1>
			<p>{category}</p>
		</div>
	)
}
export default Cards
