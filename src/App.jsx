import { Header } from './Components/header/Header.jsx'
import  { Carousel } from './Components/carousel/Carousel.jsx'
import { About } from './Components/about/About.jsx'
import { Services } from './Components/services/Services'
import { AuthorizedServices } from './Components/authorizedServices/AuthorizedServices'
import { Footer } from './Components/footer/Footer'


import './global.css'

 function App() {

  return (
    <div>
    <Header/>
    <Carousel/>
    <About/>
    <Services/>
    <AuthorizedServices/>
    <Footer/>

    </div>
  )
}

export default App
 
