import { Link , NavLink } from 'react-router-dom'
import LOGO from '../../assets/LOGO.png'
import '../../styles/Header.css'

function Header() {

    return (
        <nav>
            <Link to="/">
                <img className='Header-img' src={LOGO} alt='logo' />
            </Link> 
            <div className = 'Header'>
                <NavLink className='Header-Accueil' to="/">
                    Accueil
                </NavLink>
                <NavLink className='Header-Propos' to="/A-Propos">
                    A Propos
                </NavLink> 
            </div>       
        </nav>
    )
}
  
  export default Header
  