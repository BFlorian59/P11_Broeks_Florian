import '../../styles/Footer.css'
import LOGO_Footer from '../../assets/LOGO_Footer.png'
import styled from 'styled-components'


const FooterLogo = styled.img`
    width: 10%;
    margin-top: 3%;
`

function Footer() {
    return (
      <div  className="Footer">
        <FooterLogo src={LOGO_Footer} />
        <h1 className='Titre'> @ 2020 Kasa All rights reserved</h1>
      </div>
    )
  }
  
  export default Footer