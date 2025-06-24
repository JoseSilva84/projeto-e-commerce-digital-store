import { useState } from "react";
import ProdutosEmQuatro from "../components/ProdutosEmQuatro";

const marcas = ["Adidas", "Calenciaga", "K-Swiss", "Nike", "Puma"];
const categorias = ["Esporte e lazer", "Casual", "Utilitário", "Corrida"];

const ProductListingPage = () => {
    const [selected, setSelected] = useState("Adidas");

    return (
        <div className="flex">
            {/* Filtro lateral */}
            <div className="bg-white flex flex-col items-center justify-start py-10 mt-40 w-70 min-h-[400px] shadow rounded-lg mb-10">
                <div className="flex items-center justify-center mb-4">
                    <p className="text-black items-stretch text-left font-bold -ml-25">Filtrar por</p>
                </div>
                <div className="w-3/4 border-t border-gray-400 pt-4 text-center flex flex-col -gap-1">
                    <p className="text-black items-stretch text-left font-bold">Marca</p>
                    {marcas.map((marca) => (
                        <label
                            key={marca}
                            htmlFor={marca}
                            className="flex items-center cursor-pointer relative -mx-2"
                        >
                            <input
                                type="radio"
                                id={marca}
                                name="drone"
                                value={marca}
                                checked={selected === marca}
                                onChange={() => setSelected(marca)}
                                className="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded-none m-2 checked:bg-pink-600 checked:border-pink-600 cursor-pointer flex-shrink-0"
                            />
                            {/* "V" customizado centralizado */}
                            {selected === marca && (
                                <span className="pointer-events-none absolute left-2 top-2 flex items-center justify-center w-5 h-5 text-white text-4x1 select-none">
                                    ✔
                                </span>
                            )}
                            <span className="text-black ml-2">{marca}</span>
                        </label>
                    ))}
                </div>
                <div className="w-3/4 pt-4 text-center flex flex-col -gap-1">
                    <p className="text-black items-stretch text-left font-bold">Categoria</p>
                    {categorias.map((categoria) => (
                        <label
                            key={categoria}
                            htmlFor={categoria}
                            className="flex items-center cursor-pointer relative -mx-2"
                        >
                            <input
                                type="radio"
                                id={categoria}
                                name="drone"
                                value={categoria}
                                checked={selected === categoria}
                                onChange={() => setSelected(categoria)}
                                className="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded-none m-2 checked:bg-pink-600 checked:border-pink-600 cursor-pointer flex-shrink-0"
                            />
                            {/* "V" customizado centralizado */}
                            {selected === categoria && (
                                <span className="pointer-events-none absolute left-2 top-2 flex items-center justify-center w-5 h-5 text-white text-4x1 select-none">
                                    ✔
                                </span>
                            )}
                            <span className="text-black ml-2">{categoria}</span>
                        </label>
                    ))}
                </div>
            </div>
            {/* Produtos */}
            <div className="flex flex-row gap-6 justify-center mt-20 py-5">
                <div className="scale-80 w-full">
                    <div  className="produtos-em-quatro-hack">
                        <ProdutosEmQuatro />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListingPage;