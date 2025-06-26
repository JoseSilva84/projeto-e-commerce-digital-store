import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';

const Products = [
    { id: 1, name: "Nike Air Force 1", valor: 100.00 },
    { id: 2, name: "Nike Dunk Low", valor: 80.00 },
    { id: 3, name: "Nike Blazer Mid 77", valor: 90.00 },
    { id: 4, name: "Nike Air Max 90", valor: 70.00 },
    { id: 5, name: "Nike Air Max 270", valor: 120.00 }
]

const ProductViewPage = () => {
    const navigate = useNavigate();
    return ( 
        <>
            <div className="flex justify-between items-right px-10 mb-10 pl-250">
                <Button className="!bg-pink-600 hover:!bg-pink-700 !text-white !px-8 !py-2 rounded-lg !border-0 !shadow-none" onClick={() => navigate(-1)}>
                    Voltar
                </Button>
            </div>
            <div className='flex flex-col items-center justify-center mb-20'>
                <h3 className='text-lg font-bold text-black'>Produtos</h3>
                <ul>
                    {Products.map(product => (
                        <li key={product.id}>
                            <Link to={`/produtos/${product.id}`}>
                                {`${product.name}, R$ ${product.valor},00`}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
     );
}
 
export default ProductViewPage;