import logo from '../assets/logo.png'
import logos from '../assets/logos.png'

const Footer = () => {
    return ( 
        <footer className="bg-gray-800 text-white py-20 absolute left-0 w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8 text-left">
                    {/* Coluna 1: Logo e descrição */}
                    <div className="flex flex-col gap-2 flex-1">
                        <div className="w-50 h-50 -mt-35 rounded flex items-center justify-center">
                            <img src={logo} alt="logo" className="w-full h-full object-contain mt-30" />
                            {/* <div className="text-black font-bold text-lg">{">"}</div> */}
                        </div>
                        {/* <span className="text-2xl text-white font-semibold">Digital College</span> */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <div className="w-25 h-25 -mt-30 rounded flex items-center justify-center">
                            <img src={logos} alt="logo" className="w-full h-full object-contain mt-50" />
                        </div>
                    </div>
                    {/* Coluna 2: Informação */}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-semibold">Informação</span>
                        <a href="#" className="!text-white hover:text-pink-800 hover:!border-b-1 !inline-block">Sobre Drip Store</a>
                        <a href="#" className="!text-white hover:text-pink-800 block">Segurança</a>
                        <a href="#" className="!text-white hover:text-pink-800 block">Wishlist</a>
                        <a href="#" className="!text-white hover:text-pink-800 block">Blog</a>
                        <a href="#" className="!text-white hover:text-pink-800 block">Trabalhe conosco</a>
                        <a href="#" className="!text-white hover:text-pink-800 block">Meus Pedidos</a>
                    </div>
                    {/* Coluna 3: Categoria */}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-semibold">Categoria</span>
                        <a href="#" className="!text-white hover:text-pink-800 block">Camisetas</a>
                        <a href="#" className="!text-white hover:text-pink-800 block">Calças</a>
                        <a href="#" className="!text-white hover:text-pink-800 block">Bonés</a>
                        <a href="#" className="!text-white hover:text-pink-800 block">Headphones</a>
                        <a href="#" className="!text-white hover:text-pink-800 block">Tênis</a>
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