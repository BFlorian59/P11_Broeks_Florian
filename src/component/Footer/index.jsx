import '../../styles/Footer.css'
import LOGO_Footer from '../../assets/LOGO_Footer.png'



function Footer() {
    return (
      <div  className="Footer">
        <img className='img-footer' src={LOGO_Footer} alt="logo footer" />
        <h1 className='Titre'> © 2020 Kasa. All rights reserved</h1>
      </div>
    )
  }
  
  export default Footer