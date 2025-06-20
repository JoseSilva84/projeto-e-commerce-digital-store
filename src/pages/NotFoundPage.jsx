import Layout from "./Layout";

const NotFoundPage = () => {
    return (
        <div>
            <Layout>
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-4xl font-bold mb-4">404</h1>
                    <p className="text-lg mb-4">Página não encontrada.</p>
                    <Link to="/" className="text-pink-600 underline">Voltar para a Home</Link>
                </div>
            </Layout>
        </div>
    );
}
 
export default NotFoundPage;