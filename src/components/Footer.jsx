import logo from '../assets/logo.png'
import { useState } from "react";

const Footer = () => {
    const [hovered, setHovered] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);

    return ( 
        <footer className="bg-gray-800 text-white py-20 absolute left-0 w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8 text-left">
                    {/* Coluna 1: Logo e descrição */}
                    <div className="flex flex-col gap-2 flex-1">
                        <div className="w-50 h-50 -mt-35 rounded flex items-center justify-center">
                            <img src={logo} alt="logo" className="w-full h-full object-contain mt-30" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <div className="w-25 h-25 -mt-35 -ml-1 rounded flex items-center justify-center">
                            <div className="flex gap-2">
                                <a href="https://www.facebook.com/digitalcollegebr'" target="_blank" rel="noopener noreferrer" className="block !border-b-0">
                                    <img
                                        src={hovered ? "/src/assets/facebook2.png" : "/src/assets/facebook.png"}
                                        alt="facebook"
                                        className="w-4 h-6 m-2 cursor-pointer mt-60"
                                        onMouseEnter={() => setHovered(true)}
                                        onMouseLeave={() => setHovered(false)}
                                    />
                                </a>
                            </div>
                            <div  className="flex gap-2">
                                <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fdigitalcollegebr%2F&is_from_rlen=true" target="_blank" rel="noopener noreferrer" className="block !border-b-0">
                                    <img
                                        src={hovered2 ? "/src/assets/instagram2.png" : "/src/assets/instagram.png"}
                                        alt="instagram"
                                        className="w-6 h-6 m-2 cursor-pointer mt-60"
                                        onMouseEnter={() => setHovered2(true)}
                                        onMouseLeave={() => setHovered2(false)}
                                    />
                                </a>
                            </div>
                            <div className="flex gap-2">
                                <a href="https://x.com/eaicollegers" target="_blank" rel="noopener noreferrer" className="block !border-b-0">
                                    <img
                                        src={hovered3 ? "/src/assets/twitter2.png" : "/src/assets/twitter.png"}
                                        alt="twitter"
                                        className="w-7 h-6 m-2 cursor-pointer mt-60"
                                        onMouseEnter={() => setHovered3(true)}
                                        onMouseLeave={() => setHovered3(false)}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Coluna 2: Informação */}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-semibold">Informação</span>
                        <a href="#" className="!text-white hover:!text-pink-800 block !border-b-0">Sobre Drip Store</a>
                        <a href="#" className="!text-white hover:!text-pink-800 block !border-b-0">Segurança</a>
                        <a href="#" className="!text-white hover:!text-pink-800 block !border-b-0">Wishlist</a>
                        <a href="#" className="!text-white hover:!text-pink-800  !border-b-0">Blog</a>
                        <a href="#" className="!text-white hover:!text-pink-800 block !border-b-0">Trabalhe conosco</a>
                        <a href="#" className="!text-white hover:!text-pink-800 block !border-b-0">Meus Pedidos</a>
                    </div>
                    {/* Coluna 3: Categoria */}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-semibold">Categoria</span>
                        <a href="#" className="!text-white hover:!text-pink-800 block !border-b-0">Camisetas</a>
                        <a href="#" className="!text-white hover:!text-pink-800 block !border-b-0">Calças</a>
                        <a href="#" className="!text-white hover:!text-pink-800 block !border-b-0">Bonés</a>
                        <a href="#" className="!text-white hover:!text-pink-800 block !border-b-0">Headphones</a>
                        <a href="#" className="!text-white hover:!text-pink-800 block !border-b-0">Tênis</a>
                    </div>
                    {/* Coluna 4: Contato */}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-semibold">Contato</span>
                        <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                        <br/>
                        <p>(85) 3051-3411</p>
                    </div>
                </div>
                <div className="mt-8 border-t border-white pt-4 text-center">
                    <span className="text-sm">&copy; {new Date().getFullYear()} Digital College</span>
                </div>
            </div>
        </footer>
     );
}
 

export default Footer;