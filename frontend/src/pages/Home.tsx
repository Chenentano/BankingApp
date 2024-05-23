import { Link } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute.tsx";
import FrontPage from "../assets/FrontPage.jpeg";
import NavBar from "../components/NavBar.tsx";

const Home = () => {
    const username: string = localStorage.getItem('username') || 'Benutzer';
    const balance: string = localStorage.getItem('balance') || 'Nicht vorhanden!';

    const bankAccountNumber: string = localStorage.getItem('bankAccountNumber') || 'Nicht verfügbar';
    const recentTransactionsString = localStorage.getItem('recentTransactions');
    const recentTransactions: Transaction[] = recentTransactionsString ? JSON.parse(recentTransactionsString) : [];

    interface Transaction {
        date: string;
        description: string;
        amount: string;
    }


    return (
        <ProtectedRoute>
            <div>
                <NavBar />
                <div className="container mx-auto mt-8 text-center">
                    <h1 className="text-3xl font-semibold mb-4">Willkommen, {username}!</h1>
                    <img src={FrontPage} alt="Benutzerbild" className="mx-auto w-96 h-44 rounded-full mb-4" />
                    <p className="text-lg">Schön, Sie wiederzusehen!</p>
                </div>
                <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 mt-8 max-w-md">
                    <h2 className="text-2xl font-semibold mb-4">Kontoinformationen</h2>
                    <div className="text-lg mb-2">Konto: {bankAccountNumber}</div>
                    <div className="text-lg mb-2">Guthaben: {balance}€</div>
                    <Link to="/account-transactions" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md inline-block mt-4">Umsätze anzeigen</Link>
                </div>
                <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 mt-8 max-w-md">
                    <h2 className="text-2xl font-semibold mb-4">Letzte Transaktionen</h2>
                    <ul className="text-lg">
                        {recentTransactions.length > 0 ? recentTransactions.map((transaction: Transaction, index: number) => (
                            <li key={index} className="mb-2">
                                {transaction.date}: {transaction.description} - {transaction.amount}€
                            </li>
                        )) : <li>Keine Transaktionen verfügbar.</li>}
                    </ul>
                    <Link to="/account-transactions" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md inline-block mt-4">Alle Transaktionen anzeigen</Link>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default Home;