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
import ProdutosHome from "./components/ProdutosHome";
import ProdutosHome2 from "./components/ProdutosHome2";

function App() {

  return (
    <>
      <Header />
      {/* <Section /> */}
      <Carrosel />
      <Colecoes />
      <Camiseta />
      <ProdutosHome />
      <ProdutosHome2 />
      <Footer />
    </>
  )
}

export default App
