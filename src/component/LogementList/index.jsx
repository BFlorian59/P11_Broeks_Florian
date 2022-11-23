import data from '../../data/data.json'
import LogementItem from '../LogementItems'
import {Link} from 'react-router-dom';

function LogementList() {
  
	return (
		<div className='list'>
			<ul className='logement-list'>
                {data.map(({ id, cover, title}) =>
               
                    <div className='card' key={id}>
                        <Link to={`/logement/${id}`}>
                            <LogementItem
                                cover={cover}
                                title={title}
                            />
                        </Link>
                    </div>
                 
                )}
            </ul>
		</div>
	)
}

export default LogementList