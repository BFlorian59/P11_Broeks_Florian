import data from '../../data/data.json'
import {useParams} from 'react-router-dom';


function LogementInfo() {

    const { id } = useParams();

    const logement = data.find(log => log.id === id);
    return(
        <div>
            <div>
                <h1>{logement.title}</h1>
                <img src={logement.host.picture} alt=''></img>
                <p>{logement.host.name}</p>
            </div>
            
        </div>
        

    )  
}


export default LogementInfo
