import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css'
import Header from './components/Header';
import Footer from "./components/Footer";

const Layout = ({ children }) => {
    return ( 
        <>
        {/* Cabeçalho do site sempre visível no topo */}
        <Header />

        {/* Área principal que vai trocar conforme a rota */}
        <main>
            {children}
        </main>

        {/* Rodapé que aparece em todas as páginas */}
        <Footer />
        </>
     );
}
 
export default Layout;