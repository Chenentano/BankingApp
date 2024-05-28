import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProtectedRoute from "../../components/security/ProtectedRoute.tsx";
import FrontPage from "../../assets/FrontPage.jpeg";
import HomeNavBar from "../../components/navigationBars/HomeNavBar.tsx";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [username, setUsername] = useState('');
    const [balance, setBalance] = useState('');
    const [bankAccountNumber, setBankAccountNumber] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accountId = localStorage.getItem('accountId');
                const response = await axios.get(`/api/bankAccount/getById/${accountId}`);

                setUsername(response.data.accountName);
                setBalance(Number(response.data.balance).toFixed(2));
                setBankAccountNumber(response.data.bankAccountNumber);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, []);

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
                <HomeNavBar/>
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
            </div>
        </ProtectedRoute>
    );
};

export default Home;
