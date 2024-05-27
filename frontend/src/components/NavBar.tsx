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
        <nav className="bg-gray-800 py-5">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/home" className="text-white text-xl font-semibold flex items-center">
                    <motion.img
                        src={BankingLogo}
                        alt="Basti Bank Logo"
                        className="h-12 mr-4 block"
                    />
                    Basti Bank
                </Link>
                <div>
                    <Link to="/home" className="text-white mr-4">Startseite</Link>
                    <Link to="/transfer-form" className="text-white mr-4">Überweisung</Link>
                    <Link to="/account-transactions" className="text-white mr-4">Umsätze anzeigen</Link>
                    <Link to="/currency-converter" className="text-white mr-4">Währungsrechner</Link>
                    <Link to="/bilanz" className="text-white mr-4">Bilanz</Link>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}