import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const ListaCompras3 = () => {
    return ( 
        <>
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-8">
                <div className="flex-1 lg:pr-8 text-left ml-2">
                    <div className="flex items-center mb-2 bg-[#E7FF86] w-20 h-8 p-2 rounded-full">
                        <h2 className="text-[#474747] text-2x1 font-bold -mb-1">30% off</h2>
                    </div>
                </div>
                <div className="flex-1 flex justify-center lg:justify-end relative">
                    <img src="/src/assets/K-Swiss.png" alt="K-Swiss Masculino" className="absolute top-20 mx-24 transform scale-[4.2] -rotate-32 " style={{ width: '1200px', height: 'auto' }} />
                </div>
            </div>
        </>
     );
}
 
export default ListaCompras3;