import data from '../../data/data.json'
import {useParams} from 'react-router-dom';
import Collapse from '../../component/Collaspe';
import Flechebas from '../../assets/Flechebas.png';
import Flechehaut from '../../assets/Flechehaut.png';
import CareScale from '../Rating'


function LogementInfo(etoile_pleine , etoile ) {

    const { id } = useParams();

    const logement = data.find(log => log.id === id);
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
                <p className='tag'>
                    {logement.tags}
                </p>
                <CareScale careType='etoile_pleine' scaleValue={logement.rating} />
            </div>
            <div className='loge-collaspe'>
                <Collapse h1="Description" img_enhaut ={Flechehaut} img={Flechebas} contenue={logement.description} />
                <Collapse h1="Équipements" img_enhaut ={Flechehaut} img={Flechebas} contenue={<ul><li>{logement.equipments}</li></ul>} />
            </div>
        </div>
        

    )  
}


export default LogementInfo
