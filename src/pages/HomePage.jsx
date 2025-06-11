import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css'
import Header from './components/Header';
import Footer from "./components/Footer";
import Carrosel from "./components/Carrosel";
import Colecoes from "./components/colecoes";
import Camiseta from "./components/camiseta";
import ProdutosHome from "./components/ProdutosHome";
import ProdutosHome2 from "./components/ProdutosHome2";
import ProductJordan from "./components/ProductJordan";

function HomePage() {

  return (
    <>
      <Header />
      <Carrosel />
      <Colecoes />
      <Camiseta />
      <ProdutosHome />
      <ProdutosHome2 />
      <ProductJordan />
      <Footer />
    </>
  )
}

export default HomePage;
