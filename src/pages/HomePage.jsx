import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css'
import Carrosel from "./components/Carrosel";
import Colecoes from "./components/Colecoes";
import Camiseta from "./components/Camiseta";
import ProdutosHome from "./components/ProdutosHome";
import ProdutosHome2 from "./components/ProdutosHome2";
import ProductJordan from "./components/ProductJordan";
import Layout from "./Layout";

const HomePage = () => {

  return (
    <>
    <Layout>
      <Carrosel />
      <Colecoes />
      <Camiseta />
      <ProdutosHome />
      <ProdutosHome2 />
      <ProductJordan />
    </Layout>
    </>
  )
}

export default HomePage;
