import data from '../../data/data.json'
import LogementItem from '../LogementItems'

function LogementList() {
	return (
		<div className='list'>
			<ul className='logement-list'>
                {data.map(({ id, cover, title}) =>
                    <div className='card' key={id}>
                        <LogementItem
                            cover={cover}
                            title={title}
                        />
                    </div>
                )}
            </ul>
		</div>
	)
}

export default LogementList