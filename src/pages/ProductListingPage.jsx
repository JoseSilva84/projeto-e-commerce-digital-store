import { useState } from "react";
import ProdutosEmQuatro from "../components/ProdutosEmQuatro";

const marcas = ["Adidas", "Calenciaga", "K-Swiss", "Nike", "Puma"];
const categorias = ["Esporte e lazer", "Casual", "Utilitário", "Corrida"];
const generos = ["Masculino", "Feminino", "Unisex"];
const estados = ["Novo", "Usado"];
const options = ["mais relevantes", "mais recentes", "preço menor", "preço maior", "mais vendidos"];

const ProductListingPage = () => {
    const [selectedMarca, setSelectedMarca] = useState("Adidas");
    const [selectedCategoria, setSelectedCategoria] = useState("Esporte e lazer");
    const [selectedGenero, setSelectedGenero] = useState("Masculino");
    const [selectedEstado, setSelectedEstado] = useState("Novo");
    const [selectedOption, setSelectedOption] = useState('mais relevantes');

    return (
        <div className="flex mt-15">
            {/* Filtro lateral */}
            <div className="bg-white flex flex-col items-center justify-start py-10 mt-50 w-72 min-h-[400px] shadow rounded-lg mb-130">
                <div className="flex items-center justify-center mb-4">
                    <p className="text-black items-stretch text-left font-bold -ml-35">Filtrar por</p>
                </div>
                {/* Marca */}
                <div className="w-3/4 border-t border-gray-400 pt-4 text-center flex flex-col gap-2">
                    <p className="text-black text-left font-bold">Marca</p>
                    {marcas.map((marca) => (
                        <label key={marca} htmlFor={marca} className="flex items-center cursor-pointer relative">
                            <input
                                type="radio"
                                id={marca}
                                name="marca"
                                value={marca}
                                checked={selectedMarca === marca}
                                onChange={() => setSelectedMarca(marca)}
                                className="peer appearance-none w-5 h-5 border-2 border-gray-400 m-2 checked:bg-pink-600 checked:border-pink-600 cursor-pointer flex-shrink-0"
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
                {/* Categoria */}
                <div className="w-3/4 pt-4 text-center flex flex-col gap-2">
                    <p className="text-black text-left font-bold">Categoria</p>
                    {categorias.map((categoria) => (
                        <label key={categoria} htmlFor={categoria} className="flex items-center cursor-pointer relative">
                            <input
                                type="radio"
                                id={categoria}
                                name="categoria"
                                value={categoria}
                                checked={selectedCategoria === categoria}
                                onChange={() => setSelectedCategoria(categoria)}
                                className="peer appearance-none w-5 h-5 border-2 border-gray-400 m-2 checked:bg-pink-600 checked:border-pink-600 cursor-pointer flex-shrink-0"
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
                {/* Gênero */}
                <div className="w-3/4 pt-4 text-center flex flex-col gap-2">
                    <p className="text-black text-left font-bold">Gênero</p>
                    {generos.map((genero) => (
                        <label key={genero} htmlFor={genero} className="flex items-center cursor-pointer relative">
                            <input
                                type="radio"
                                id={genero}
                                name="genero"
                                value={genero}
                                checked={selectedGenero === genero}
                                onChange={() => setSelectedGenero(genero)}
                                className="peer appearance-none w-5 h-5 border-2 border-gray-400 m-2 checked:bg-pink-600 checked:border-pink-600 cursor-pointer flex-shrink-0"
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
                {/* Estado */}
                <div className="w-3/4 pt-4 text-center flex flex-col gap-2">
                    <p className="text-black text-left font-bold">Estado</p>
                    {estados.map((estado) => (
                        <label key={estado} htmlFor={estado} className="flex items-center cursor-pointer relative">
                            <input
                                type="radio"
                                id={estado}
                                name="estado"
                                value={estado}
                                checked={selectedEstado === estado}
                                onChange={() => setSelectedEstado(estado)}
                                className="peer appearance-none w-5 h-5 border-2 border-gray-400 m-2 checked:bg-pink-600 checked:border-pink-600 cursor-pointer flex-shrink-0"
                            />
                            {selectedEstado === estado && (
                                <span className="pointer-events-none absolute left-2 top-2 flex items-center justify-center w-5 h-5 text-white text-xs select-none">
                                    ✔
                                </span>
                            )}
                            <span className="text-black ml-2">{estado}</span>
                        </label>
                    ))}
                </div>
            </div>
            {/* Produtos e Ordenação */}
            <div className="flex-1 flex flex-col items-center mt-28 gap-10 mb-6">
                {/* Ordenação */}
                <div className="w-70 -mb-50">
                    <div className="relative">
                        <select
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            className="w-full px-4 py-3 pr-10 text-gray-700 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-pink-700 focus:border-transparent cursor-pointer"
                        >
                            {options.map((option) => (
                                <option key={option} value={option}>
                                    Ordenar por: {option}
                                </option>
                            ))}
                        </select>
                        {/* Ícone da seta personalizado */}
                        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
                {/* Produtos */}
                <div className="flex flex-row gap-6 justify-center py-4 w-full">
                    <div className="scale-80 w-full">
                        <div className="produtos-em-quatro-hack flex flex-row flex-wrap gap-6 justify-center w-full">
                            <ProdutosEmQuatro />
                            <ProdutosEmQuatro />
                            <ProdutosEmQuatro />
                            <ProdutosEmQuatro />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListingPage;