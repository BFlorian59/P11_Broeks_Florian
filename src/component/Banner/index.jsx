
//solution 1, ça utilise le destructeur d'objet {}
function Banner( {img} ) {
	return <div className='acceuil-banner'><img src={img} alt='' className='img-banner'/></div>
	
}


//solution 2 moins fun
// function Banner( props ) {
// 	return <div className='acceuil-banner'><img src={props.img} alt='' className='img-banner'/></div>
	
// }

export default Banner

//on repasse sur OP ? :)