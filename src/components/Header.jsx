import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import cartIcon from '../assets/cart.svg';
import { NavLink } from "react-router-dom";

const Header = () => {
    return ( 
    <header className="bg-white border-b fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 !bg-pink-600 rounded flex items-center justify-center">
              <div className="text-white font-bold text-lg">{">"}</div>
            </div>
            <span className="text-2xl font-bold text-pink-600">Digital Store</span>
          </div>

          {/* Campo de busca */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <InputText
                placeholder="Pesquisar produto..."
                className="w-full pl-4 pr-12 py-2 rounded-lg !border-0 !outline-none focus:!border-0 focus:!outline-none focus:!ring-2 focus:!ring-pink-600 focus:!border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-600 bg-transparent focus:!outline-none">
                <i className="pi pi-search text-lg"></i>
              </button>
            </div>
          </div>

          {/* Ações do usuário */}
          <div className="flex items-center gap-4">
            <a className="px-4 py-2 rounded underline !border-0" href="#">Cadastre-se</a>
            <Button label="Entrar" className="!bg-pink-600 hover:!bg-pink-700 !text-white !px-8 !py-2 rounded-lg !border-0 !shadow-none" />
            <div className="relative">
              <button className="bg-transparent hover:!border-pink-200 px-3 py-2 rounded flex items-center justify-center focus:!outline-none">
                <img src={cartIcon} alt="Carrinho" className="w-[30px] h-[30px]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navegação */}
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center gap-8 py-3 border-t border-gray-100">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 font-bold border-b-2 border-pink-600 pb-1"
                : "text-gray-600 hover:text-pink-600 font-medium pb-1"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 font-bold border-b-2 border-pink-600 pb-1"
                : "text-gray-600 hover:text-pink-600 font-medium pb-1"
            }
          >
            Produtos
          </NavLink>
          <NavLink
            to="/emconstrucao"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 font-bold border-b-2 border-pink-600 pb-1"
                : "text-gray-600 hover:text-pink-600 font-medium pb-1"
            }
          >
            Categorias
          </NavLink>
          <NavLink
            to="/notfound"
            className={({ isActive }) =>
              isActive
                ? "text-pink-600 font-bold border-b-2 border-pink-600 pb-1"
                : "text-gray-600 hover:text-pink-600 font-medium pb-1"
            }
          >
            Meus Pedidos
          </NavLink>
        </nav>
      </div>
    </header>
    );
}
 
export default Header;
