import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Habilidades from "../../components/Habilidades";
import SobreMim from "../../components/SobreMim";
import Valores from "../../components/Valores";


import './home.css'

function Home() {
    return (
        <>
          <Banner />
          <SobreMim/>
          <Valores/>
          <Habilidades/>
          <Footer/>
        </>

    )
}
export default Home;