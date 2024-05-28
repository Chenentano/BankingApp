import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BankingLogo from "../assets/BankingLogo.png";

export default function NavBar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
        console.log("Erfolgreich ausgelogged!");
    };

    return (
        <aside className="bg-gray-800 h-screen w-64 fixed top-0 left-0 overflow-y-auto">
            <div className="px-4 py-5 border-b border-gray-700">
                <Link to="/home" className="text-white text-2xl font-semibold flex items-center">
                    <motion.img
                        src={BankingLogo}
                        alt="Basti Bank Logo"
                        className="h-12 mr-4 block"
                    />
                    Basti Bank
                </Link>
            </div>
            <nav className="px-4 py-6">
                <div className="space-y-4">
                    <Link to="/home" className="text-white text-lg block hover:text-gray-200">
                        Startseite
                    </Link>
                    <Link to="/transfer-form" className="text-white text-lg block hover:text-gray-200">
                        Überweisung
                    </Link>
                    <Link to="/account-transactions" className="text-white text-lg block hover:text-gray-200">
                        Umsätze anzeigen
                    </Link>
                    <Link to="/currency-converter" className="text-white text-lg block hover:text-gray-200">
                        Währungsrechner
                    </Link>
                </div>
            </nav>
            <div className="absolute bottom-0 left-0 w-full p-4">
                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md w-full"
                >
                    Logout
                </button>
            </div>
        </aside>
    );
}
