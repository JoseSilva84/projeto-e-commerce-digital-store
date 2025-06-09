import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";

const ProductJordan = () => {
    return ( 
        <>
            <div className="w-screen bg-white flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mt-16 p-4 lg:p-8 relative left-1/2 right-1/2 -mx-[50vw]">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full my-8">
                    <div className="flex-1 flex justify-center lg:justify-end h-80 relative">
                        <img src="/src/assets/jordan.png" alt="jordan" className="relative z-10 transition-transform duration-300 hover:translate-x-10 hover:rotate-12" />
                        <img src="/src/assets/elipse.png" alt="elipse" className="absolute -top-10 left-55 object-cover z-0" />
                    </div>
                    <div className="flex-1 lg:pr-8 text-left">
                        <h2 className="text-pink-700 text-2x1 mb-2 font-bold">Oferta especial</h2>
                        <div className="flex-1 flex lg:justify-end items-end-safe mb-2">
                            <h1 className="text-black !text-[60px] mb-2 font-extrabold">Air Jordan edição de colecionador</h1>
                        </div>
                        <p className="text-black mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        <Button label="Ver Oferta" className="!bg-pink-600 hover:!bg-pink-700 !text-white !px-8 !py-2 rounded-lg !border-0 mt-4 focus:!outline-none !shadow-none" />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ProductJordan;