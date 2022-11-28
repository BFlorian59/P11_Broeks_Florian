import Banner from '../../component/Banner'
import Background from '../../assets/background.png'
import LogementList from '../../component/LogementList'

import '../../styles/acceuil.css'


function Home() {
  return (
    <div className='content'>
      <Banner img={Background} >
        {/* <img src={Background} alt='' className='img-banner'/> */}
      </Banner>
      <LogementList/>
    </div>
  )
}

export default Home
