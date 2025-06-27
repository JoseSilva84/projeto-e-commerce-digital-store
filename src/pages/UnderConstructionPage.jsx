import Layout from "../pages/Layout";
import siteconstrucao from "../assets/siteconstrucao.png";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";

const UnderConstructionPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Layout>
                <div className="flex flex-col items-center justify-center h-screen">
                    <img src= {siteconstrucao} alt="Em construção" className="h-80 w-80 -mb-9" />
                    <p className="text-pink-600 text-4xl font-bold mb-4">Página em construção.</p>
                    <Button className="!bg-pink-600 hover:!bg-pink-700 !text-white !px-8 !py-2 rounded-lg !border-0 !shadow-none" onClick={() => navigate(-1)}>
                        Voltar
                    </Button>
                </div>
            </Layout>
        </div>
    );
}
 
export default UnderConstructionPage;