import Banner from '../../component/Banner'
import Background_propos from '../../assets/Background_propos.png'
import Collapse from '../../component/Collapse'


import '../../styles/acceuil.css'

function Propos() {
  return (
    <div>
      <Banner img={Background_propos} >
        {/* <img src={Background} alt='' className='img-banner'/> */}
      </Banner>
      <Collapse/>
    </div>
  )
}

export default Propos
