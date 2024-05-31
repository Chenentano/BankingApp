import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import backgroundImage from '../../assets/Auth_Background.png';

const RegisterPage = () => {
    const [account, setAccount] = useState({ accountName: "", password: "", email: "",
        telephone: ""
    });
    const navigate = useNavigate();

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/bankAccount/auth/create', account);
            if (response.status === 201) {
                console.log("Erfolgreich registriert!: ", response.data);
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', response.data.accountName);
                localStorage.setItem('balance', response.data.balance);
                localStorage.setItem('telephone', response.data.telephone);
                localStorage.setItem('bankAccountNumber', response.data.bankAccountNumber);
                navigate("/home");
                setAccount({ accountName: '', password: '', email: '', telephone: ''});
            }
        } catch (err) {
            console.error("Account konnte nicht erstellt werden!", err);
        }
    };

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
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <motion.div
                className="max-w-md w-full p-8 bg-white bg-opacity-90 shadow-lg rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h2
                    className="text-3xl font-bold text-gray-900 mb-6 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Basti's Bank Register
                </motion.h2>
                <form onSubmit={handleRegister}>
                    <motion.div
                        className="mb-5"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.6}}
                    >
                        <label htmlFor="accountName" className={labelClasses}>Username</label>
                        <input type="text" id="accountName" name="accountName" className={inputClasses}
                               placeholder="MaxMustermann" value={account.accountName}
                               onChange={handleInputChange}/>
                    </motion.div>
                    <motion.div
                        className="mb-5"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.9}}
                    >
                        <label htmlFor="email" className={labelClasses}>E-Mail</label>
                        <input type="email" id="email" name="email" className={inputClasses}
                               placeholder="example@gmail.com" value={account.email}
                               onChange={handleInputChange}/>
                    </motion.div>
                    <motion.div
                        className="mb-5"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.9}}
                    >
                        {/* Pattern für später pattern="^0[17][0-9]{9}*/}
                        <label htmlFor="telephone" className={labelClasses}>Telefonnummer</label>
                        <input type="tel" id="telephone" name="telephone"
                               title="Die Telefonnummer muss das Format haben 0[17]XXXXXXXXX"
                               className={inputClasses} placeholder="0[17]XXXXXXXXX"
                               value={account.telephone} onChange={handleInputChange}/>
                    </motion.div>
                    <motion.div
                        className="mb-6"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 1.2}}
                    >
                        <label htmlFor="password" className={labelClasses}>Password</label>
                        <input type="password" id="password" name="password" className={inputClasses}
                               placeholder="Passwort" value={account.password}
                               onChange={handleInputChange}/>
                    </motion.div>
                    <motion.button
                        type="submit"
                        className={buttonClasses}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 1.5}}
                    >
                        Register
                    </motion.button>
                    <motion.div
                        className="mt-4 text-center"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 1.8}}
                    >
                        <p className="text-sm text-gray-600">
                            Sie haben schon einen Account? <Link to="/login"
                                                                 className="text-indigo-600 hover:text-indigo-500">Hier
                            einloggen!</Link>
                        </p><br/>
                        <p className="text-md text-gray-600">
                            <Link to="/"
                                  className="text-indigo-600 hover:text-indigo-500">Zurück zur Startseite</Link>
                        </p>
                    </motion.div>
                </form>
            </motion.div>
        </div>
    );
};

export default RegisterPage;
