import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LOGO from '../../assets/LOGO.png'
import { NavLink } from "react-router-dom";
import '../../styles/Header.css'


const HomeLogo = styled.img`
    width: 75%;
    margin-left: 10%;
`

const NavContainer = styled.nav`
  padding: 3%;
  display: flex;
  align-items: center;
  `

function Header() {


    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo src={LOGO} />
            </Link> 
            <div className = 'Header'>
                <NavLink className='Header-Accueil' to="/">
                    Accueil
                </NavLink>
                <NavLink className='Header-Propos' to="/A-Propos">
                    A Propos
                </NavLink> 
            </div>
               
        </NavContainer>
    )
  }
  
  export default Header
  