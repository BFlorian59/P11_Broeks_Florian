import { useState } from 'react'


function Collapse( {h1, img_enhaut, img, contenue} ) {

    const [isOpen, setIsOpen] = useState(false)


     return isOpen ? (
        <div className='propos-cart'>
            <button
                className='propos-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                <h1>{h1}</h1>
                <img src={img_enhaut} alt='' />
            </button>
            <h2>{contenue}</h2>
        </div> 
    ) : (
        <div className='propos-cart-closed'>
			<button
				className='propos-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
                <h1>{h1}</h1>
				<img src={img} alt=''/>
			</button>
		</div>
    )
    
}

export default Collapse