import data from '../../data/data.json'
import {useParams} from 'react-router-dom';


function LogementInfo() {

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
                <p>Etoile</p>
            </div>
        </div>
        

    )  
}


export default LogementInfo
