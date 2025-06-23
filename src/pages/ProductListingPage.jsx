import ProdutosHome from "../components/ProdutosHome";
import ProdutosHome2 from "../components/ProdutosHome2";

const ProductListingPage = () => {
    return (
        <div className="flex">
            <div className="flex-1 flex items-center justify-center">
                <h3>shsh</h3>
            </div>
            <div className="flex-3 items-center justify-center my-30">
                <div>
                    <ProdutosHome />
                    <ProdutosHome2 />
                </div>
            </div>
        </div>
    );
}
 
export default ProductListingPage;