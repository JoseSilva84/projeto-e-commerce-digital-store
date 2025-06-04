import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css'
import Header from './components/Header';
import Footer from "./components/Footer";
import Section from "./components/Section";
import Carrosel from "./components/Carrosel";
import Colecoes from "./components/colecoes";
import Camiseta from "./components/camiseta";

function App() {

  return (
    <>
      <Header />
      {/* <Section /> */}
      <Carrosel />
      <Colecoes />
      <Camiseta />
      <Footer />
    </>
  )
}

export default App
