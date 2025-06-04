import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";

const Colecao1 = () => {
    return ( 
        <>
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="flex-1 lg:pr-8 text-left ml-2">
                    <div className="flex items-center mb-2 bg-[#E7FF86] w-20 h-8 p-2 rounded-full">
                        <h2 className="text-[#474747] text-2x1 font-bold -mb-1">30% off</h2>
                    </div>
                    <div className="flex-1 flex lg:justify-end items-end-safe mb-2">
                        <h1 className="text-black !text-[30px] mb-2 font-extrabold">Novo
Beats Bass</h1>
                    </div>
                    <Button label="Comprar" className="!bg-white hover:!bg-pink-700 hover:!text-white !text-pink-700 !px-8 !py-2 rounded-lg !border-0 mt-4 focus:!outline-none !shadow-none" />
                </div>
                <div className="flex-1 flex justify-center lg:justify-end relative">
                    <img src="/src/assets/fone.png" alt="fone" className="absolute -top-12 w-48 h-36 transform scale-[1.6] transition-transform rotate-40 duration-300 hover:-scale-x-100" />
                </div>
            </div>
        </>
     );
}
 
export default Colecao1;