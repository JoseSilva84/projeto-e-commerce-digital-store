import CamisetaPequena from "./camisetaPequena";
import CamisetaPequena2 from "./CamisetaPequena2";
import CamisetaPequena3 from "./CamisetaPequena3";
import CamisetaPequena4 from "./CamisetaPequena4";

const Camiseta = () => {
    return ( 
        <>
            <h3 className="text-xl text-black mb-2 font-bold mx-4">Coleções em destaque</h3>
            <div className="flex justify-between items-center mx-80">
                <CamisetaPequena />
                <CamisetaPequena2 />
                <CamisetaPequena3 />
                <CamisetaPequena4 />
            </div>
            <div className="flex justify-between items-center mx-79">
                <h2 className="text-black text-left font-medium p-4">Camisetas</h2>
                <h2 className="text-black text-left font-medium p-4">Calças</h2>
                <h2 className="text-black text-left font-medium p-4">Tênis</h2>
                <h2 className="text-black text-left font-medium p-4">Headphones</h2>
            </div>
        </>
     );
}
 
export default Camiseta;