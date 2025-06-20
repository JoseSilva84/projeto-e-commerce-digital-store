
import Carrosel from "./components/Carrosel";
import Colecoes from "./components/Colecoes";
import Camiseta from "./components/Camiseta";
import ProdutosHome from "./components/ProdutosHome";
import ProdutosHome2 from "./components/ProdutosHome2";
import ProductJordan from "./components/ProductJordan";
import Layout from "./pages/Layout";

const App = () => {

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

export default App
