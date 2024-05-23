import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProtectedRoute from "../components/ProtectedRoute";
import FrontPage from "../assets/FrontPage.jpeg";
import NavBar from "../components/NavBar";

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

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const itemVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.2 } },
    };

    return (
        <ProtectedRoute>
            <div>
                <NavBar />
                <motion.div
                    className="container mx-auto mt-8 text-center"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1 className="text-4xl font-bold mb-4" variants={itemVariants}>
                        Willkommen, {username}!
                    </motion.h1>
                    <motion.img
                        src={FrontPage}
                        alt="Benutzerbild"
                        className="mx-auto w-50 h-40 rounded-full mb-4"
                        variants={itemVariants}
                    />
                    <motion.p className="text-lg" variants={itemVariants}>
                        Schön, Sie wiederzusehen!
                    </motion.p>
                </motion.div>
                <motion.div
                    className="container mx-auto bg-white shadow-lg rounded-lg p-6 mt-8 max-w-md"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2 className="text-2xl font-semibold mb-4" variants={itemVariants}>
                        Kontoinformationen
                    </motion.h2>
                    <motion.div className="text-lg mb-2" variants={itemVariants}>
                        Konto: {bankAccountNumber}
                    </motion.div>
                    <motion.div className="text-lg mb-2" variants={itemVariants}>
                        Guthaben: {balance}€
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Link
                            to="/account-transactions"
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md inline-block mt-4"
                        >
                            Umsätze anzeigen
                        </Link>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="container mx-auto bg-white shadow-lg rounded-lg p-6 mt-8 max-w-md"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h2 className="text-2xl font-semibold mb-4" variants={itemVariants}>
                        Letzte Transaktionen
                    </motion.h2>
                    <ul className="text-lg">
                        {recentTransactions.length > 0 ? recentTransactions.map((transaction: Transaction, index: number) => (
                            <motion.li key={index} className="mb-2" variants={itemVariants}>
                                {transaction.date}: {transaction.description} - {transaction.amount}€
                            </motion.li>
                        )) : <motion.li variants={itemVariants}>Keine Transaktionen verfügbar.</motion.li>}
                    </ul>
                    <motion.div variants={itemVariants}>
                        <Link
                            to="/account-transactions"
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md inline-block mt-4"
                        >
                            Alle Transaktionen anzeigen
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </ProtectedRoute>
    );
};

export default Home;
