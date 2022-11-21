function LogementItem({ id, cover, title}) {
	return (
		<li key={id} className='logement-item'>
            <div className="div-img">
                <img className='image' src={cover} alt={`${title} cover`} />
            </div>
			<p className="titre">{title}</p>
		</li>
	)
}



export default LogementItem