import '../../styles/Logementinfo.css'
import LogementInfo from '../../component/Logementinfo'
import Slideshow from '../../component/Slideshow'


function Logement() {
    return (
      <div className='content'>
        <Slideshow />
        <LogementInfo/>
      </div>
    )
  }
  
  export default Logement
  