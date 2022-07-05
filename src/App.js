import "./App.css";

//componests
import HeaderComponst from "./components/HeaderComponst";
import Home from "./components/Home";
import AcercaComponst from "./components/AcercaComponst"
import ServiciosComponst from "./components/ServiciosComponst";
import PortafolioComponents from "./components/PortafolioComponents";
import ContactComponents from "./components/ContactComponents";




function App() {
    return (
        <div className="App">
            <HeaderComponst />
            <Home />
            <AcercaComponst />
            <ServiciosComponst />
            <PortafolioComponents />
            <ContactComponents />
            <footer>
                <small >Sitio diseñado por <a href="https://www.linkedin.com/in/edwin-wilche-45b071177/" target="_blank" rel="nooper noreferrer" >@edwinwilche</a></small>
            </footer>
        </div>
    );
}

export default App;
