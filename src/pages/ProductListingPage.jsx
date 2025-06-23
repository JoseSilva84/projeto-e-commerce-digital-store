import ProdutosEmQuatro from "../components/ProdutosEmQuatro";

const ProductListingPage = () => {
    return (
        <div className="flex">
            {/* Filtro lateral */}
            <div className="bg-white flex flex-col items-center justify-start py-10 mt-40 w-56 min-h-[400px] shadow rounded-lg">
                <div className="flex items-center justify-center mb-10">
                    <p className="text-black underline underline-offset-4">Filtrar por</p>
                </div>
                <label className="flex items-center cursor-pointer">
                    <input
                        type="radio"
                        id="Adidas"
                        name="drone"
                        value="Adidas"
                        checked
                        readOnly
                        className="peer appearance-none w-5 h-5 border-2 border-pink-600 rounded-none m-2 checked:bg-pink-600 checked:border-pink-600 cursor-pointer"
                    />
                    <span className="text-black ml-2">Adidas</span>
                </label>
            </div>
            {/* Produtos */}
            <div className="flex-1 flex items-center justify-center mt-40 py-10">
                <ProdutosEmQuatro />
            </div>
        </div>
    );
}
 
export default ProductListingPage;