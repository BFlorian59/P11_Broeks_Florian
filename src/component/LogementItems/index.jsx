function LogementItem({ id, cover, title}) {
	return (
		<li key={id} className='logement-item'>
			<img className='image' src={cover} alt={`${title} cover`} />
			{title}
		</li>
	)
}



export default LogementItem