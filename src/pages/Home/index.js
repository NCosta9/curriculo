import Banner from "../../components/Banner";
import Experiencia from "../../components/Experiencia";
import Footer from "../../components/Footer";
import Habilidades from "../../components/Habilidades";
import Tools from "../../components/Tools";
import Skilltec from "../../components/Skilltec";
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
          <Skilltec/>
          <Tools/>
          <Experiencia/>
          <Footer/>
        </>

    )
}
export default Home;