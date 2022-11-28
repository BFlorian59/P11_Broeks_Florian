import Banner from '../../component/Banner'
import Background_propos from '../../assets/Background_propos.png'
import Collapse from '../../component/Collaspe'
import Flechebas from '../../assets/Flechebas.png'
import Flechehaut from '../../assets/Flechehaut.png'
import '../../styles/Propos.css'


import '../../styles/acceuil.css'

function Propos() {
  return (
    <div className='content'>
      <Banner img={Background_propos} >
      </Banner>
      <div className='collapse'>
        <Collapse h1="Fiabilité" img_enhaut ={Flechehaut} img={Flechebas} contenue="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
        <Collapse h1="Respect" img_enhaut ={Flechehaut} img={Flechebas} contenue="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <Collapse h1="Service" img_enhaut ={Flechehaut} img={Flechebas} contenue = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
        <Collapse h1="Sécurité" img_enhaut ={Flechehaut} img={Flechebas} contenue="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
      </div>
      
    </div>
  )
}

export default Propos
