import Banner from '../../component/Banner'
import Background from '../../assets/background.png'

function Home() {
  return (
    <div>
      <Banner>
        <img src={Background} alt=''/>
      </Banner>
    </div>
  )
}

export default Home
