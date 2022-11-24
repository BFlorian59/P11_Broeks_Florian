import etoile_pleine from '../../assets/étoile_pleine.svg'
import etoile from '../../assets/étoile.svg'

function CareScale({ scaleValue}) {
	const range = [1, 2, 3, 4, 5]
    const scaleType = <img src={etoile_pleine} alt='etoile_pleine-icon' />

	return (
		<div className='rating'>		
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : <span key={rangeElem.toString()}>{<img src={etoile} alt='etoile-icon' />}</span>
			)}
		</div>
	)
}

export default CareScale