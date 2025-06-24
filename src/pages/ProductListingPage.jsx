import { useState } from "react";
import ProdutosEmQuatro from "../components/ProdutosEmQuatro";

const ProductListingPage = () => {
    const [selected, setSelected] = useState("Adidas");

    return (
        <div className="flex">
            {/* Filtro lateral */}
            <div className="bg-white flex flex-col items-center justify-start py-10 mt-40 w-56 min-h-[400px] shadow rounded-lg">
                <div className="flex items-center justify-center mb-10">
                    <p className="text-black">Filtrar por</p>
                </div>
                <div className="border-t border-gray-400 pt-4 text-center">
                    <label className="flex items-center cursor-pointer relative">
                        <input
                            type="radio"
                            id="Adidas"
                            name="drone"
                            value="Adidas"
                            checked={selected === "Adidas"}
                            onChange={() => setSelected("Adidas")}
                            className="peer appearance-none w-5 h-5 border-2 border-pink-600 rounded-none m-2 checked:bg-white checked:border-pink-600 cursor-pointer"
                        />
                        {/* "V" customizado */}
                        <span className="pointer-events-none absolute left-3 top-1 text-pink-700 text-xs select-none" style={{display: selected === "Adidas" ? "block" : "none"}}>✔</span>
                        <span className="text-black ml-2">Adidas</span>
                    </label>
                </div>
            </div>
            {/* Produtos */}
            <div className="flex-1 flex items-center justify-center mt-40 py-10">
                <ProdutosEmQuatro />
            </div>
        </div>
    );
}
 
export default ProductListingPage;