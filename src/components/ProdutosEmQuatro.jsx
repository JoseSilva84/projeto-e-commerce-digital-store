import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";
import Product4 from "./Product4";
import { useNavigate } from 'react-router-dom';

const ProdutosEmQuatro = () => {
    const navigate = useNavigate();

    return ( 
            <div className="flex flex-wrap justify-center gap-10 px-2 py-2">
                {/* Produto 1 */}
                <div className="w-60 flex flex-col items-center rounded-lg">
                        <div onClick={() => navigate("/produtos")} className="underline2">
                            <Product1 />
                        </div>
                    <p className="text-gray-500 -ml-50 text-sm mt-2">Tênis</p>
                    <p className="text-black text-xl font-extrabold">K-Swiss V8 - Masculino</p>
                    <div className="flex items-center gap-2 -ml-15">
                        <span className="text-gray-400 font-bold line-through">R$ 200,00</span>
                        <span className="text-black font-extrabold">R$ 100,00</span>
                    </div>
                </div>
                {/* Produto 2 */}
                <div className="w-60 flex flex-col items-center rounded-lg">
                    <div onClick={() => navigate("/produtos")} className="underline2">
                        <Product2 />
                    </div>
                    <p className="text-gray-500 -ml-50 text-sm mt-2">Tênis</p>
                    <p className="text-black text-xl font-extrabold">K-Swiss V8 - Masculino</p>
                    <div className="flex items-center gap-2 -ml-15">
                        <span className="text-gray-400 font-bold line-through">R$ 200,00</span>
                        <span className="text-black font-extrabold">R$ 100,00</span>
                    </div>
                </div>
                {/* Produto 3 */}
                <div className="w-60 flex flex-col items-center rounded-lg">
                    <Product3 />
                    <p className="text-gray-500 -ml-50 text-sm mt-2">Tênis</p>
                    <p className="text-black text-xl font-extrabold">K-Swiss V8 - Masculino</p>
                    <div className="flex items-center gap-2 -ml-15">
                        <span className="text-gray-400 font-bold line-through">R$ 200,00</span>
                        <span className="text-black font-extrabold">R$ 100,00</span>
                    </div>
                </div>
                {/* Produto 4 */}
                <div className="w-60 flex flex-col items-center rounded-lg">
                    <Product4 />
                    <p className="text-gray-500 -ml-50 text-sm mt-2">Tênis</p>
                    <p className="text-black text-xl font-extrabold">K-Swiss V8 - Masculino</p>
                    <div className="flex items-center gap-2 -ml-15">
                        <span className="text-gray-400 font-bold line-through">R$ 200,00</span>
                        <span className="text-black font-extrabold">R$ 100,00</span>
                    </div>
                </div>
            </div>
     );
}
 
export default ProdutosEmQuatro;