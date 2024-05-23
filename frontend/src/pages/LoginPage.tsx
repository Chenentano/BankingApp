import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import backgroundImage from '../assets/Auth_Background.png';

const LoginPage = () => {
    const [account, setAccount] = useState({ accountName: "", password: "" });
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/bankAccount/auth/login', account);
            if (response.status === 200) {
                console.log("Erfolgreich eingeloggt!: ", response.data);
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', response.data.accountName);
                localStorage.setItem('balance', response.data.balance);
                localStorage.setItem('bankAccountNumber', response.data.bankAccountNumber);
                navigate("/home");
                setAccount({ accountName: '', password: '' });
            }
        } catch (err) {
            console.error("Falscher Benutzer oder PW!", err);
            setAccount({ accountName: '', password: '' });
        }
    };

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        if (!isLoggedIn) {
            console.log("Nicht eingelogged -> /login ");
            navigate("/login");
        } else {
            const timeout = setTimeout(() => {
                setIsLoading(false);
            }, 1000);
            navigate("/home");
            return () => clearTimeout(timeout);
        }
    }, [navigate]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccount({
            ...account,
            [event.target.name]: event.target.value
        });
    };

    const labelClasses = "block text-sm font-medium text-gray-700 mb-1";
    const inputClasses = "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";
    const buttonClasses = "w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

    return (
        <>
            {isLoading ? (
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p className="loading-text">Einen Moment bitte</p>
                </div>
            ) : (
                <>
                    <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
                         style={{backgroundImage: `url(${backgroundImage})`}}>
                        <motion.div
                            className="max-w-md w-full p-8 bg-white bg-opacity-90 shadow-lg rounded-lg"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.2}}
                        >
                            <motion.h2
                                className="text-3xl font-bold text-gray-900 mb-6 text-center"
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.4}}
                            >
                                Basti's Bank Login
                            </motion.h2>
                            <form onSubmit={handleLogin}>
                                <motion.div
                                    className="mb-4"
                                    initial={{opacity: 0, y: -20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.6}}
                                >
                                    <label htmlFor="accountName" className={labelClasses}>Username</label>
                                    <input type="text" id="accountName" name="accountName" className={inputClasses}
                                           placeholder="Enter your username" value={account.accountName || ''}
                                           onChange={handleInputChange}/>
                                </motion.div>
                                <motion.div
                                    className="mb-6"
                                    initial={{opacity: 0, y: -20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.8}}
                                >
                                    <label htmlFor="password" className={labelClasses}>Password</label>
                                    <input type="password" id="password" name="password" className={inputClasses}
                                           placeholder="Enter your password" value={account.password || ''}
                                           onChange={handleInputChange}/>
                                </motion.div>
                                <motion.button
                                    type="submit"
                                    className={buttonClasses}
                                    initial={{opacity: 0, y: -20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 1}}
                                >
                                    Login
                                </motion.button>
                                <motion.div
                                    className="mt-4 text-center"
                                    initial={{opacity: 0, y: -20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 1.2}}
                                >
                                    <p className="text-sm text-gray-600">
                                        Noch kein Kunde? <Link to="/register"
                                                               className="text-indigo-600 hover:text-indigo-500">Hier
                                        ein
                                        kostenloses Konto erstellen!</Link>
                                    </p><br/>
                                    <p className="text-md text-gray-600">
                                        <Link to="/"
                                              className="text-indigo-600 hover:text-indigo-500">Zurück zur Startseite</Link>
                                    </p>
                                </motion.div>
                            </form>
                        </motion.div>
                    </div>
                </>
            )}
        </>
    )
};


export default LoginPage;