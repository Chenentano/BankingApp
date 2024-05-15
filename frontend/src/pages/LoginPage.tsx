import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const inputClasses = "mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";
const labelClasses = "block text-sm font-medium text-zinc-700";
const buttonClasses = "w-full bg-blue-500 text-white p-2 rounded-lg";

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
                navigate("/home");
                setAccount({ accountName: '', password: '' });
            }
        } catch (err) {
            console.error("Falscher Benutzer oder PW!", err);
            setAccount({ accountName: '', password: '' });
        }
    }

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
    }

return (
    <>
        {isLoading ? (
            <div className="loading-container">
                <div className="spinner"></div>
                <p className="loading-text">Einen Moment bitte</p>
            </div>
        ) : (
            <>
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-zinc-800 mb-4">BASTI'S UNFASSBARE BANK!1!11 JETZT EINLOGGEN
                        JAJAJAJAJAJAJAJAJAJ</h2><br/>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="username" className={labelClasses}>Username</label>
                            <input type="text" id="accountName" name="accountName" className={inputClasses}
                                   placeholder="Enter your username" value={account.accountName || ''}
                                   onChange={handleInputChange}/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className={labelClasses}>Password</label>
                            <input type="password" id="password" name="password" className={inputClasses}
                                   placeholder="Enter your password" value={account.password || ''}
                                   onChange={handleInputChange}/>
                        </div>
                        <button type="submit" className={buttonClasses}>Login</button>
                        <div>
                            <p className="mt-2">
                                Noch kein Kunde? <Link to="/register" className="text-blue-500">Hier ein kostenloses
                                Konto
                                erstellen!</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
                </>
        )}
    </>
);
}
;

export default LoginPage;
