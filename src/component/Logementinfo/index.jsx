/* eslint-disable eqeqeq */
import data from '../../data/data.json'
import {useParams , useNavigate } from 'react-router-dom';
import Collapse from '../../component/Collaspe';
import Flechebas from '../../assets/Flechebas.png';
import Flechehaut from '../../assets/Flechehaut.png';
import CareScale from '../Rating'
import { useEffect, useState } from 'react';

 
const  LogementInfo = () => {

    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const navigate = useNavigate();

 

    useEffect(()=>{

        const matchingAccomodationId = data.find((accomodation) => accomodation.id === id);
        matchingAccomodationId ? setLogement(matchingAccomodationId) : navigate("/404/");            // : setError(<Navigate to="/404/" />)
    },[id, navigate])

    return (
        <>
        {
            logement==undefined? <></>:<>
            <div className='loge-info'>
                <div className='loge-titre'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <ul className='tag'>
                        {
                            logement.tags.map((tag) =>
                            <li key={tag.toString()}>{tag}</li>
                        )}
                    </ul>
                </div>

                <div className='loge-classement'>
                    <div className='loge-nom'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt=''></img>
                    </div>
                    <CareScale careType='etoile_pleine' scaleValue={logement.rating} />
                </div>        
            </div>

            <div className='loge-collaspe'>
                <Collapse h1="Description" img_enhaut ={Flechehaut} img={Flechebas} contenue={logement.description} />
                <Collapse h1="Équipements" img_enhaut ={Flechehaut} img={Flechebas} contenue={<ul className='listeequipement'>{logement.equipments.map((equipment) =>

                <li key={equipment.toString()}>{equipment}</li>)}</ul>} />

            </div></>

        }

    </>

    )
}

export default LogementInfo

 
