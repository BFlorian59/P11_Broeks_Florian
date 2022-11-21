import Api from '../../api/apiData'
// import styled from 'styled-components'
// import LogementItem from '../LogementItems'


// const Images = styled.h1`
//     font-size: 150%;
// `

// const Titre = styled.h1`
//     font-size: 150%;
//     color: white;
// `


function LogementList() {
	return (
		<div className='list'>
			<ul className='logement-list'>
                <Api />
                    {/* {Api.map(({ id, cover, title}) =>
                        <div key={id}>
                            <LogementItem
                                cover={cover}
                                title={title}
                            />
                        </div>
                    )} */}

			</ul>
		</div>
	)

    
}

export default LogementList