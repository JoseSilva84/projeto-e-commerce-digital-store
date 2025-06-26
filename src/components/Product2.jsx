import ListaCompras2 from "./ListaCompras2";

const Product2 = () => {
    return ( 
        <>
            <div className="flex justify-center gap-x-6 mx-auto px-2 py-4">
                <div className="w-60 h-65 p-4 bg-[#ecf3fd] rounded-lg overflow-hidden cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300">
                    <ListaCompras2 />
                </div>
            </div>
        </>
     );
}
 
export default Product2;