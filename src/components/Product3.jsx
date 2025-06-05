import ListaCompras3 from "./ListaCompras3";

const Product3 = () => {
    return ( 
        <>
            <div className="flex justify-center gap-x-6 mx-auto px-2 py-4">
                <div className="w-60 h-65 p-4 bg-[#ecf3fd] rounded-lg overflow-hidden cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300">
                    <ListaCompras3 />
                </div>
            </div>
            {/* <div className="flex-1/4 gap-x-6 px-2 py-4">
                <p className= "text-gray-500 text-sm text-left px-120">Tênis</p>
                <p className= "text-black text-xl font-extrabold text-left px-120">K-Swiss V8 - Masculino</p>
                <div className="flex items-center px-120 m-0 gap-2">
                    <p className= "text-gray-400 font-bold line-through">R$ 200,00</p>
                    <p className= "text-black font-extrabold">R$ 100,00</p>
                </div>
            </div> */}
        </>
     );
}
 
export default Product3;