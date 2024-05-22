import { Link } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute.tsx";
import FrontPage from "../assets/FrontPage.jpeg";
import NavBar from "../components/NavBar.tsx";

const Home = () => {
    const username = localStorage.getItem('username') || '';
    const balance = localStorage.getItem('balance') || '';

    const accountNumber = "Fang endlich damit an du Script-Kiddy";

    return (
        <ProtectedRoute>
            <div>
                <NavBar />
                <div className="container mx-auto mt-8 text-center">
                    <h1 className="text-3xl font-semibold mb-4">Willkommen, {username}!</h1>
                    <img src={FrontPage} alt="Benutzerbild" className="mx-auto w-96 h-44 rounded-full mb-4" />
                </div>
                <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 mt-8 max-w-md">
                    <h2 className="text-2xl font-semibold mb-4">Kontoinformationen</h2>
                    <div className="text-lg mb-2">Konto: {accountNumber}</div>
                    <div className="text-lg mb-2">Guthaben: {balance}€</div>
                    <Link to="/account-transactions" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md inline-block mt-4">Umsätze anzeigen</Link>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default Home;
