import Layout from "../pages/Layout";
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Layout>
                <div className="flex flex-col items-center justify-center h-screen">
                    <i className="pi pi-exclamation-triangle" style={{ fontSize: '5rem', color: 'pink', marginBottom: '12px' }}></i>
                    <h1 className="text-pink-600 text-4xl font-bold mb-4">404</h1>
                    <p className="text-pink-600 text-lg mb-4">Página não encontrada</p>
                    <Button className="!bg-pink-600 hover:!bg-pink-700 !text-white !px-8 !py-2 rounded-lg !border-0 !shadow-none" onClick={() => navigate(-1)}>
                        Voltar
                    </Button>
                </div>
            </Layout>
        </div>
    );
}
 
export default NotFoundPage;