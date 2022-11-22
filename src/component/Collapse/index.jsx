import { useState } from 'react'
import Flechebas from '../../assets/Flechebas.png'
import Flechehaut from '../../assets/Flechehaut.png'
import '../../styles/Propos.css'

function Collapse() {

    const [isOpenfiabilité, setIsOpenfiabilité] = useState(false)
	const [isOpenrespect, setIsOpenrespect] = useState(false)
    const [isOpenservice, setIsOpenservice] = useState(false)
    const [isOpenresponsabilite, setIsOpenresponsabilite] = useState(false)


    const fiabilité = isOpenfiabilité ? 
    ( 
        <div className='propos-cart'>
            <button
                className='propos-cart-toggle-button'
                onClick={() => setIsOpenfiabilité(false)}
            >
                <h1>Fiabilité </h1>
                <img src={Flechehaut} alt='flêche en haut'></img>
            </button>
            <h2>Les annonces postées sur Kasa garantissent une fiabilité totale. 
                Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</h2>
        </div> 
    ): (
        <div className='propos-cart-closed'>
			<button
				className='propos-cart-toggle-button'
				onClick={() => setIsOpenfiabilité(true)}
			>
                <h1>Fiabilité </h1>
				<img src={Flechebas} alt='flêche en bas'></img>
			</button>
		</div>
    )


    const respect = isOpenrespect ? 
    ( 
        <div className='propos-cart'>
            <button
                className='propos-cart-toggle-button'
                onClick={() => setIsOpenrespect(false)}
            >
                <h1>Respect </h1>
                <img src={Flechehaut} alt='flêche en haut'></img>
            </button>
            <h2>La bienveillance fait partie des valeurs fondatrices de Kasa.
                 Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</h2>
        </div> 
    ): (
        <div className='propos-cart-closed'>
			<button
				className='propos-cart-toggle-button'
				onClick={() => setIsOpenrespect(true)}
			>
                <h1>Respect </h1>
				<img src={Flechebas} alt='flêche en bas'></img>
			</button>
		</div>
    )


    const service = isOpenservice ? 
    ( 
        <div className='propos-cart'>
            <button
                className='propos-cart-toggle-button'
                onClick={() => setIsOpenservice(false)}
            >
                <h1>Service </h1>
                <img src={Flechehaut} alt='flêche en haut'></img>
            </button>
            <h2>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                N'hésitez pas à nous contacter si vous avez la moindre question.</h2>
        </div> 
    ): (
        <div className='propos-cart-closed'>
			<button
				className='propos-cart-toggle-button'
				onClick={() => setIsOpenservice(true)}
			>
                <h1>Service </h1>
				<img src={Flechebas} alt='flêche en bas'></img>
			</button>
		</div>
    )

    const responsabilite = isOpenresponsabilite ? 
    ( 
        <div className='propos-cart'>
            <button
                className='propos-cart-toggle-button'
                onClick={() => setIsOpenresponsabilite(false)}
            >
                <h1>Responsabilité </h1>
                <img src={Flechehaut} alt='flêche en haut'></img>
            </button>
            <h2>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité 
                établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards 
                sont bien respectés. 
                Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</h2>
        </div> 
    ): (
        <div className='propos-cart-closed'>
			<button
				className='propos-cart-toggle-button'
				onClick={() => setIsOpenresponsabilite(true)}
			>
                <h1>Responsabilité </h1>
				<img src={Flechebas} alt='flêche en bas'></img>
			</button>
		</div>
    )

	return (
        <div className='collapse'>
            {fiabilité}
            {respect}
            {service}
            {responsabilite}
        </div>
        
	)
    
}

export default Collapse