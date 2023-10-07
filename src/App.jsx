import Header from "./components/Header/Header";
import MainP from "./components/MainP/MainP";
import './app.css';
import SectionProyects from "./components/SectionProyects/SectionProyects";
import WorkTools from "./components/WorkTools/WorkTools";
import Educacion from "./components/Educacion/Educacion";
import Formulario from "./components/Formulario/Formulario";
import Footer from "./components/Footer/Footer";
const App = () => {
    return (
        <>
        <Header/>
        <MainP/>
        <SectionProyects />
        <WorkTools />
        <Educacion />
        <Formulario />
        <Footer />
        </>
    )
}

export default App