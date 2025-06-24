import { useState } from "react";
import ProdutosEmQuatro from "../components/ProdutosEmQuatro";

const marcas = ["Adidas", "Calenciaga", "K-Swiss", "Nike", "Puma"];
const categorias = ["Esporte e lazer", "Casual", "Utilitário", "Corrida"];
const generos = ["Masculino", "Feminino", "Unisex"];

const ProductListingPage = () => {
    const [selectedMarca, setSelectedMarca] = useState("Adidas");
    const [selectedCategoria, setSelectedCategoria] = useState("Esporte e lazer");
    const [selectedGenero, setSelectedGenero] = useState("Masculino");

    return (
        <div className="flex">
            {/* Filtro lateral */}
            <div className="bg-white flex flex-col items-center justify-start py-10 mt-40 w-72 min-h-[400px] shadow rounded-lg mb-10">
                <div className="flex items-center justify-center mb-4">
                    <p className="text-black items-stretch text-left font-bold">Filtrar por</p>
                </div>
                <div className="w-3/4 border-t border-gray-400 pt-4 text-center flex flex-col gap-2">
                    <p className="text-black items-stretch text-left font-bold">Marca</p>
                    {marcas.map((marca) => (
                        <label
                            key={marca}
                            htmlFor={marca}
                            className="flex items-center cursor-pointer relative"
                        >
                            <input
                                type="radio"
                                id={marca}
                                name="marca"
                                value={marca}
                                checked={selectedMarca === marca}
                                onChange={() => setSelectedMarca(marca)}
                                className="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded-none m-2 checked:bg-pink-600 checked:border-pink-600 cursor-pointer flex-shrink-0"
                            />
                            {selectedMarca === marca && (
                                <span className="pointer-events-none absolute left-2 top-2 flex items-center justify-center w-5 h-5 text-white text-xs select-none">
                                    ✔
                                </span>
                            )}
                            <span className="text-black ml-2">{marca}</span>
                        </label>
                    ))}
                </div>
                <div className="w-3/4 pt-4 text-center flex flex-col gap-2">
                    <p className="text-black items-stretch text-left font-bold">Categoria</p>
                    {categorias.map((categoria) => (
                        <label
                            key={categoria}
                            htmlFor={categoria}
                            className="flex items-center cursor-pointer relative"
                        >
                            <input
                                type="radio"
                                id={categoria}
                                name="categoria"
                                value={categoria}
                                checked={selectedCategoria === categoria}
                                onChange={() => setSelectedCategoria(categoria)}
                                className="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded-none m-2 checked:bg-pink-600 checked:border-pink-600 cursor-pointer flex-shrink-0"
                            />
                            {selectedCategoria === categoria && (
                                <span className="pointer-events-none absolute left-2 top-2 flex items-center justify-center w-5 h-5 text-white text-xs select-none">
                                    ✔
                                </span>
                            )}
                            <span className="text-black ml-2">{categoria}</span>
                        </label>
                    ))}
                </div>
                <div className="w-3/4 pt-4 text-center flex flex-col gap-2">
                    <p className="text-black items-stretch text-left font-bold">Gênero</p>
                    {generos.map((genero) => (
                        <label
                            key={genero}
                            htmlFor={genero}
                            className="flex items-center cursor-pointer relative"
                        >
                            <input
                                type="radio"
                                id={genero}
                                name="genero"
                                value={genero}
                                checked={selectedGenero === genero}
                                onChange={() => setSelectedGenero(genero)}
                                className="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded-none m-2 checked:bg-pink-600 checked:border-pink-600 cursor-pointer flex-shrink-0"
                            />
                            {selectedGenero === genero && (
                                <span className="pointer-events-none absolute left-2 top-2 flex items-center justify-center w-5 h-5 text-white text-xs select-none">
                                    ✔
                                </span>
                            )}
                            <span className="text-black ml-2">{genero}</span>
                        </label>
                    ))}
                </div>
            </div>
            {/* Produtos */}
            <div className="flex flex-row gap-6 justify-center mt-20 py-5">
                <div className="scale-80 w-full">
                    <div className="produtos-em-quatro-hack">
                        <ProdutosEmQuatro />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListingPage;