import { useState } from 'react'
import data from '../../data/data.json'
import {useParams} from 'react-router-dom';
import fleche_droite from '../../assets/flèche_droite.png'
import fleche_gauche from '../../assets/flèche_gauche.png'
import '../../styles/slides.css'


function Slideshow() {

    const { id } = useParams();

    const logement = data.find(log => log.id === id);

    const slide = [logement.pictures.length]

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? logement.pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === logement.pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    console.log(slide)

  return (
    <div className='sliderStyles'>
        <div>
            <div className='leftArrowStyles' onClick={goToPrevious}>
                <img className='fleche_gauche' src={fleche_gauche} alt="fleche_gauche"/>
            </div>
            <div className='rightArrowStyles' onClick={goToNext}>
                <img className='fleche_droite' src={fleche_droite} alt="fleche_droite"/>
            </div>
        </div>
        <div className='slideStyles'>
            <img className='carousel-image' src={logement.pictures[currentIndex]} alt="carousel"/>
        </div>
        <div className='dotsContainerStyles'>
            <p>{currentIndex+1}/{slide}</p>
        </div>
    </div>
  );
};

export default Slideshow
