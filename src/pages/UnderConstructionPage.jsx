import Layout from "../pages/Layout";
import siteconstrucao from "../assets/siteconstrucao.png";

const UnderConstructionPage = () => {
    return (
        <div>
            <Layout>
                <div className="flex flex-col items-center justify-center h-screen">
                    <img src= {siteconstrucao} alt="Em construção" className="h-80 w-80 -mb-9" />
                    <p className="text-pink-600 text-4xl font-bold mb-4">Página em construção.</p>
                </div>
            </Layout>
        </div>
    );
}
 
export default UnderConstructionPage;