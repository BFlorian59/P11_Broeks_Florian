import data from '../../data/data.json'
import {useParams} from 'react-router-dom';
import Collapse from '../../component/Collaspe';
import Flechebas from '../../assets/Flechebas.png';
import Flechehaut from '../../assets/Flechehaut.png';
import CareScale from '../Rating'

function LogementInfo() {

    const { id } = useParams();

    const logement = data.find(log => log.id === id);

    const listetag = logement.tags.map((tag) =>
        <li key={tag.toString()}>{tag}</li>
    ) ;

    const listeequipement = logement.equipments.map((equipment) =>
        <li key={equipment.toString()}>{equipment}</li>
    ) ;

    return(
        <div>
            <div className='loge-info'>
                <div className='loge-titre'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                </div>
                <div className='loge-nom'>
                    <p>{logement.host.name}</p>
                    <img src={logement.host.picture} alt=''></img>
                </div>
            </div> 
            <div className='loge-tags'>
                <ul className='tag'>
                    {listetag}
                </ul>
                <CareScale careType='etoile_pleine' scaleValue={logement.rating} />
            </div>
            <div className='loge-collaspe'>
                <Collapse h1="Description" img_enhaut ={Flechehaut} img={Flechebas} contenue={logement.description} />
                <Collapse h1="Équipements" img_enhaut ={Flechehaut} img={Flechebas} contenue={<ul className='listeequipement'>{listeequipement}</ul>} />
            </div>
        </div>
    )  
}


export default LogementInfo
