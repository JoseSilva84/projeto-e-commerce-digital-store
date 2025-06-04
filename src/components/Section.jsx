import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";

const Section = () => {
    return ( 
        <>
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="flex-1 lg:pr-8 text-left">
                    <h2 className="text-yellow-500 text-2x1 mb-2">Melhores ofertas personalizadas</h2>
                    <div className="flex-1 flex lg:justify-end items-end-safe mb-2">
                        <h1 className="text-black !text-[70px] mb-2 font-extrabold">Queima de Estoque Nike</h1>
                        <img className="!w-20 !h-20 mb-2 m-[20px]" src="/src/assets/fogo.png" alt="estoque" />
                    </div>
                    <p className="text-black mb-4">Aproveite ofertas imperdíveis em tênis, roupas e acessórios Nike com até 70% de desconto. Estoque limitado e por tempo determinado.</p>
                    <Button label="Ver Ofertas" className="!bg-pink-600 hover:!bg-pink-700 !text-white !px-8 !py-2 rounded-lg !border-0 mt-4 focus:!outline-none !shadow-none" />
                </div>
                <div className="flex-1 flex justify-center lg:justify-end">
                    <img src="/src/assets/white-sneakers.png" alt="white-sneakers" />
                </div>
            </div>
        </>
     );
}
 
export default Section;