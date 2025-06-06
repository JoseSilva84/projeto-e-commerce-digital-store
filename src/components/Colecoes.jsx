import Colecao1 from "./Colecao1";
import Colecao2 from "./Colecao2";
import Colecao3 from "./Colecao3";

const Colecoes = () => {
    return ( 
        <>
            <p className="text-xl text-black text-left mb-2 font-bold mx-4">Coleções em destaque</p>
            <div className="flex justify-center gap-x-6 mx-auto px-2 py-4">
                <div className="w-100 h-55 p-4 bg-[#D8E3f2] hover:shadow-xl rounded-lg overflow-hidden"><Colecao1 /></div>
                <div className="w-100 h-55 p-4 bg-[#D8E3f2] hover:shadow-xl rounded-lg overflow-hidden"><Colecao2 /></div>
                <div className="w-100 h-55 p-4 bg-[#D8E3f2] hover:shadow-xl rounded-lg overflow-hidden"><Colecao3 /></div>
            </div>
        </>
     );
}
 
export default Colecoes;