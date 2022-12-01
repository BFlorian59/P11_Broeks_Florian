import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './page/Home'
import Logement from './page/Logement'
import Propos from './page/Propos'
import Header from './component/Header'
import Footer from './component/Footer'
import ErrorPage from './component/Error'


  function Router() {
    return (
        <BrowserRouter>
            <Header/> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="logement/:id" element={<Logement />} />
                <Route path="/A-Propos" element={<Propos />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
  } 

  export default Router
